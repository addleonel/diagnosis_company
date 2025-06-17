import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement } from "chart.js";
import { actividadesApoyo } from "./questions"; // ✅ Importamos desde questions.ts
import "./App.css";

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

const Support: React.FC = () => {
  const [actividades, setActividades] = useState(actividadesApoyo);
  const barChartRef = useRef<Chart<"bar"> | null>(null);
  const doughnutChartRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    return () => {
      if (barChartRef.current) barChartRef.current.destroy();
      if (doughnutChartRef.current) doughnutChartRef.current.destroy();
    };
  }, []);

  const actualizarRespuesta = (actIndex: number, itemIndex: number, tipo: "si" | "no") => {
    const nuevasActividades = [...actividades];
    const item = nuevasActividades[actIndex].items[itemIndex];

    if (tipo === "si") {
      item.si = true;
      item.no = false;
    } else if (tipo === "no") {
      item.si = false;
      item.no = true;
    }

    setActividades(nuevasActividades);
  };

  const calcularPorcentaje = (actIndex: number): number => {
    const total = actividades[actIndex].items.length;
    const si = actividades[actIndex].items.filter((i) => i.si).length;
    return Math.round((si / total) * 100);
  };

  // 🔁 Cálculo dinámico del total de preguntas (antes era fijo en 30)
  const totalPreguntas = actividades.reduce(
    (acc, act) => acc + act.items.length,
    0
  );

  const totalCumplido = actividades.reduce(
    (acc, act) => acc + act.items.filter((i) => i.si).length,
    0
  );

  const datosBarras = {
    labels: actividades.map((a) => a.nombre),
    datasets: [
      {
        label: "% Cumplido",
        data: actividades.map((_, i) => calcularPorcentaje(i)),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // ✅ Datos actualizados dinámicamente
  const datosTorta = {
    labels: ["Cumplido", "Pendiente"],
    datasets: [
      {
        data: [
          totalCumplido,                     // ✅ Cantidad total de respuestas Sí
          totalPreguntas - totalCumplido     // ✅ Cantidad total de respuestas No
        ],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };
  // 🔁 Cálculo del porcentaje tota
  // Cálculo dinámico del total de preguntas y cumplimiento

  const porcentajeTotal = totalPreguntas > 0
    ? Math.round((totalCumplido / totalPreguntas) * 100)
    : 0;
  // Opciones del gráfico de torta
  const opcionesTorta = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: `Cumplimiento Total: ${porcentajeTotal}%`,
        font: {
          size: 18,
          weight: "bold" as "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      // Opcional: Muestra porcentajes en cada sección
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const total = context.parsed;
            return `${context.label}: ${total} ítems (${Math.round((total / totalPreguntas) * 100)}%)`;
          },
        },
      },
    },
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
                      <th>Sí</th>
                      <th>No</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actividad.items.map((item, itemIndex) => (
                      <tr key={item.texto}>
                        <td>{item.texto}</td>
                        <td>
                          <Form.Check
                            type="checkbox"
                            checked={item.si}
                            onChange={() => actualizarRespuesta(actIndex, itemIndex, "si")}
                          />
                        </td>
                        <td>
                          <Form.Check
                            type="checkbox"
                            checked={item.no}
                            onChange={() => actualizarRespuesta(actIndex, itemIndex, "no")}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <ProgressBar
                  now={calcularPorcentaje(actIndex)}
                  label={`${calcularPorcentaje(actIndex)}%`}
                  className="mb-3"
                />
              </Card.Body>
            </Card>
          ))}
        </div>

        {/* Columna Derecha: Gráficos */}
        <div className="chart-column">
          <div className="chart-container">
            <h4>Desempeño por Actividad</h4>
            <Bar
              ref={(chart) => {
                if (chart && !barChartRef.current) {
                  barChartRef.current = chart;
                }
              }}
              data={datosBarras}
            />
          </div>
          <div className="chart-container">
            <h4>Cumplimiento Total</h4>
            <Doughnut
              ref={(chart) => {
                if (chart && !doughnutChartRef.current) {
                  doughnutChartRef.current = chart;
                }
              }}
              data={datosTorta}
              options={opcionesTorta}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;