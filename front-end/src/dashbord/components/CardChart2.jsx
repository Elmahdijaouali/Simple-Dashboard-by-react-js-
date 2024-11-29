import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function CardChart2() {
  // Data for the pie chart
  const data = {
    labels: ["Red", "Blue", "Yellow"], // Labels for the pie slices
    datasets: [
      {
        data: [300, 50, 100], // The values of each slice
        backgroundColor: ["red", "blue", "yellow"], // The colors for each slice
        hoverOffset: 4, // Slight offset on hover
      },
    ],
  };

  // Options for customization (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw} units`; // Customize tooltip text
          },
        },
      },
    },
  };
  return (
    
    <div
      className={`bg-dark    lg:w-2/6 w-full my-2 lg:my-0 h-96  mx-3 lg:rounded-3xl rounded-md py-3 px-5`}
    >
       <h1 className="font-bold mb-5 text-2xl">Sales by Category</h1>
      <Pie className="mx-auto " data={data} options={options} />
    </div>
  );
}
