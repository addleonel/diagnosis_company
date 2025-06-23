import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(...registerables);

interface LikertGaugeProps {
  score: number;
}

const LikertGauge: React.FC<LikertGaugeProps> = ({ score }) => {
  const getColorByScore = (score: number) => {
    if (score <= 2) return '#f44336'; // Rojo
    if (score <= 4) return '#ff9800'; // Naranja
    if (score <= 6) return '#fbc02d'; // Amarillo
    if (score <= 8) return '#689f38'; // Verde claro
    return '#1e88e5'; // Azul
  };

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Satisfacción',
        data: [score],
        backgroundColor: getColorByScore(score),
        borderColor: 'white',
        borderWidth: 2,
        datalabels: {
          formatter: () => `${score}/10`,
          color: 'white',
          font: { weight: "bold" as const },
          align: 'end' as const,
          anchor: 'end' as const,
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: { display: true },
    },
    scales: {
      r: {
        angle: 180, // Media luna (180°)
        min: 0,
        max: 10,
        ticks: { stepSize: 1, display: false },
        grid: { circular: true, color: 'rgba(0,0,0,0.1)' },
        pointLabels: {
          fontSize: 12,
          fontColor: '#666',
          display: false,
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeOutBounce' as const,
    },
  };

  return <PolarArea data={data} options={options} height={150} />;
};

export default LikertGauge;