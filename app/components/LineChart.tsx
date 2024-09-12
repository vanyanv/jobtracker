import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

type LineChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
};

const LineChart: React.FC<{ data: LineChartData }> = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (context) => `Value: ${context.raw}`,
            },
          },
        },
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      }}
    />
  );
};

export default LineChart;
