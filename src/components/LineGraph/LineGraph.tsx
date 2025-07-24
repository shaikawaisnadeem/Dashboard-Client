import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chartjs.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Daily Time Usage',
        data: [45, 128, 92, 173, 135, 198],
        borderColor: '#dce1eaff',
        borderWidth: 1,
        fill: false,
        tension: 0.5,
        pointBorderWidth: 0,
        pointRadius: 5,
        pointHoverRadius: 7,
        // 👇 Dot colors from your CSS
        pointBackgroundColor: [
          'rgba(136, 96, 255, 0.8)',   // dot1
          'rgba(158, 120, 255, 0.8)',  // dot2
          'rgba(180, 144, 255, 0.8)',  // dot3
          'rgba(202, 168, 255, 0.8)',  // dot4
          'rgba(224, 192, 255, 0.8)',  // dot5
          'rgba(246, 216, 255, 0.8)'   // extrapolated 6th dot
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(200,200,200,0.3)',
          lineWidth: 1,
          borderColor: 'black'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(150,150,150,0.3)',
          lineWidth: 1,
          borderColor: 'black'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff'
        }
      },
      title: {
        display: true,
        text: 'Track Your Journey',
        color: 'white',
        font: {
          size: 22,
          weight: '400'
        }
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#eee'
      }
    }
  };

  return (
    <div className="line-container" style={{ height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
