import React from 'react' ;
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components (required for Chart.js 3.x and above)
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function CardChart() {
     // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
    datasets: [
      {
        label: 'My First Dataset',  // Label for the dataset
        data: [65, 59, 80, 81, 56], // Data values for each label
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',       // Border color of bars
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Analyse', 
      },
      legend: {
        position: 'top',
      },
    },
  };
  return (
    <div className='lg:w-4/6 my-2 lg:my-0 w-full lg:h-96 h-fit dark:bg-dark bg-gray-300 mx-3 lg:rounded-3xl rounded-md  py-2  '>
  
        <Bar className='w-full mx-auto' data={data} options={options} />
    </div>
  )
}
