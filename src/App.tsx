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
import { actividadesIniciales } from "./questions"; // ✅ Importamos desde questions.ts
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

const App: React.FC = () => {
  const [actividades, setActividades] = useState(actividadesIniciales); // ✅ Usamos los datos importados
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

  const datosTorta = {
    labels: ["Cumplido", "Pendiente"],
    datasets: [
      {
        data: [
          actividades.reduce((acc, act) => acc + act.items.filter((i) => i.si).length, 0),
          30 - actividades.reduce((acc, act) => acc + act.items.filter((i) => i.si).length, 0),
        ],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Checklist Cadena de Valor</h1>
      <Row>
        <Col md={7}>
          {actividades.map((actividad, actIndex) => (
            <Card key={actividad.nombre} className="mb-4 shadow">
              <Card.Header className="bg-primary text-white">
                <h5>{actividad.nombre}</h5>
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
        </Col>
        <Col md={5}>
          <Row>
            <Col md={5}>
              <h4 className="text-center">Desempeño por Actividad</h4>
              <Bar
                ref={(chart) => {
                  if (chart && !barChartRef.current) {
                    barChartRef.current = chart;
                  }
                }}
                data={datosBarras}
              />
            </Col>
            <Col md={2}>
              <h4 className="text-center">Cumplimiento Total</h4>
              <Doughnut
                ref={(chart) => {
                  if (chart && !doughnutChartRef.current) {
                    doughnutChartRef.current = chart;
                  }
                }}
                data={datosTorta}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      

     
    </Container>
  );
};

export default App;