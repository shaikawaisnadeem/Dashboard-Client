import React from 'react'
import './PieChart.css'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend
)

const PieChart = () => {
  const data = {
    labels: ['Completed', 'In Process', 'Pending'],
    datasets: [
      {
        data: [45, 25, 30],
        backgroundColor: [
          'rgba(136, 96, 255, 0.8)',
          'rgba(158, 120, 255, 0.8)',
          'rgba(180, 144, 255, 0.8)',
        ],
        borderWidth: 0,
        cutout: '65%',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    }
  };

  return (
    <div className="donut-container">
      <Doughnut data={data} options={options} />
      <div className="custom-legend">
        <span><div className="legend-dot dot1" /> Completed</span>
        <span><div className="legend-dot dot2" /> In Process</span>
        <span><div className="legend-dot dot3" /> Pending</span>
      </div>
    </div>
  );
}

export default PieChart
