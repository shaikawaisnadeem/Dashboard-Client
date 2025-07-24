import React from 'react'
import './BarChart.css'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

const BarChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
  {
    label: 'Tasks',
    data: [6.5, 8.2, 5.8, 7.3, 6.9, 4.2, 3.1],
    backgroundColor: [
      'rgba(136, 96, 255, 0.8)',
      'rgba(145, 103, 255, 0.8)',
      'rgba(158, 120, 255, 0.8)',
      'rgba(170, 130, 255, 0.8)',
      'rgba(180, 144, 255, 0.8)',
      'rgba(190, 158, 255, 0.8)',
      'rgba(200, 170, 255, 0.8)',
    ],
    borderWidth: 0,
  },
]
}

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
  y: {
    beginAtZero: true,
    ticks: {
      color: '#d4c5f9',
      stepSize: 2,     
      maxTicksLimit: 6,  
    },
    grid: {
      color: 'rgba(255, 255, 255, 0.1)',
      lineWidth: 1,    
    },
  },
  x: {
    ticks: { color: '#d4c5f9' },
    grid: { display: false },
  },
},

}

  return (
    <div className="donut-container">
      <Bar data={data} options={options}  />
    </div>
  )
}

export default BarChart