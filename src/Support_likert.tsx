import React, { useState, useRef } from "react";
import {
  Card,
  Table,
  Form,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement } from "chart.js";
import { actividadesApoyo } from "./questions_likert"; // ✅ Importamos desde questions.ts
import "./CadenaValor.css";
import type { ItemChecklist } from "./types_likert";

// Registramos los módulos necesarios
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  DoughnutController,
  ArcElement
);


const Support_likert: React.FC = () => {
  const [actividades, setActividades] = useState(actividadesApoyo);
  const barChartRef = useRef<Chart<"bar"> | null>(null);

  const actualizarRespuesta = (actIndex: number, itemIndex: number, valor: ItemChecklist["respuesta"]) => {
    const nuevasActividades = [...actividades];
    nuevasActividades[actIndex].items[itemIndex].respuesta = valor;
    setActividades(nuevasActividades);
  };

  const calcularPromedio = (actIndex: number): number => {
    const items = actividades[actIndex].items;
    const totalItems = items.length;
    const sumaPuntajes = items.reduce((acc, item) => {
      const puntaje = item.respuesta ? LIKERT_ESCALA[item.respuesta] : 0;
      return acc + puntaje;
    }, 0);
    return Math.round((sumaPuntajes / totalItems) * 100) / 100; // Dos decimales
  };

  // Mapeo de respuestas a valores numéricos
  const LIKERT_ESCALA = {
    "Nada Satisfecho": 1,
    "Poco Satisfecho": 2,
    "Neutral": 3,
    "Muy satisfecho": 4,
    "Totalmente satisfecho": 5,
  } as const;

  // Datos para gráfico Likert (distribución por actividad)
  const generarDatosLikert = (actIndex: number) => {
    const categorias = ["Nada Satisfecho", "Poco Satisfecho", "Neutral", "Muy satisfecho", "Totalmente satisfecho"];
    const conteo = categorias.map(cat => 
      actividades[actIndex].items.filter(i => i.respuesta === cat).length
    );
    return {
      labels: ["Respuestas"],
      datasets: categorias.map((cat, i) => ({
        label: cat,
        data: [conteo[i]],
        backgroundColor: [
          "#f44336", "#e91e63", "#9c27b0", "#2196f3", "#4caf50"
        ][i],
      }))
    };
  };

  // Configuración de gráfico Likert
  const opcionesLikert = {
    responsive: true,
    plugins: {
      legend: { position: "right" as const },
      title: { display: true, text: "Distribución de Respuestas (Likert)" },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.raw} ítems`
        }
      }
    },
    indexAxis: "y" as const,
    scales: {
      x: { 
        stacked: true,
        // You can add suggestedMin/suggestedMax or leave ticks empty for default behavior
        ticks: {}
      },
      y: { stacked: true }
    }
  };

  return (
    <>
      <div className="app-container">
        {/* Columna Izquierda: Preguntas */}
        <div className="checklist-column">
          {actividades.map((actividad, actIndex) => (
            <Card key={actividad.nombre} className="mb-4 shadow">
              <Card.Header className="bg-primary text-white">
                <h4>{actividad.nombre}</h4>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Elemento</th>
                      <th>Respuesta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actividad.items.map((item, itemIndex) => (
                      <tr key={item.texto}>
                        <td>{item.texto}</td>
                        <td>
                          <Form.Select
                            value={item.respuesta || ""}
                            onChange={(e) => actualizarRespuesta(actIndex, itemIndex, e.target.value as ItemChecklist["respuesta"])}
                          >
                            <option value="">Seleccione...</option>
                            <option value="Nada Satisfecho">Nada Satisfecho</option>
                            <option value="Poco Satisfecho">Poco Satisfecho</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Muy satisfecho">Muy satisfecho</option>
                            <option value="Totalmente satisfecho">Totalmente satisfecho</option>
                          </Form.Select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <ProgressBar
                  now={Math.round(calcularPromedio(actIndex) * 20)} // Escalado a 100%
                  label={`${Math.round(calcularPromedio(actIndex) * 20)}%`}
                  className="mb-3"
                />
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Columna Derecha: Gráficos */}
        <div className="chart-column">
          {/* Gráfico Likert por actividad */}
          {actividades.map((actividad, index) => (
            <div key={actividad.nombre} className="chart-container">
              <h4>{actividad.nombre}</h4>
              <Bar
                data={generarDatosLikert(index)}
                options={opcionesLikert}
                ref={(chart) => {
                  if (chart && !barChartRef.current) barChartRef.current = chart;
                }}
              />
            </div>
          ))}

          {/* Gráfico de promedio total */}
            <div className="chart-container">
              <h4>Promedio General (%)</h4>
              <Doughnut
                data={{
                  labels: ["Promedio"],
                  datasets: [{
                    // Convertimos el promedio general a porcentaje
                    data: [
                      Math.round(
                        ((actividades.reduce((acc, _, i) => acc + calcularPromedio(i), 0) / actividades.length) * 20)
                      )
                    ],
                    backgroundColor: ["#2196f3"]
                  }]
                }}
                options={{
                  plugins: {
                    title: {
                      display: true,
                      text: `Promedio Total: ${
                        Math.round(
                          ((actividades.reduce((acc, _, i) => acc + calcularPromedio(i), 0) / actividades.length) * 20)
                        )
                      }%`,
                      font: { size: 18 }
                    }
                  }
                }}
              />
            </div>

        </div>
      </div>
    </>
  );
};

export default Support_likert;