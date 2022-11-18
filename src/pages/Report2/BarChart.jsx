import React from "react";
import Chart from "chart.js/auto";
import logo from "../../images/logo.png";
import { Bar } from "react-chartjs-2";
import "./bar.css"

const BarChart = () => {
  const labels = [" ", " ", " ", " ", " ", " ", " ", " "," ", " ", " ", " ", " "];
  // const labels = ["pH", "EC", "OC", "Nitrogen", "Phosphorus", "Potassium", "Sulphur", "Iron", "Copper", "Zinc", "Boron", "Manganese", "Microbes"];

  const options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      scales: {
        x: {
            max: 60,
            min: 0, 
            ticks: {
              stepSize: 20
            }
        }
        
    },
      elements: {
        bar: { 
          borderWidth: 2,
          borderRadius: 8,
        
        },
      },
      responsive: true,

  };



  const data = {
    labels,
    datasets: [
      {
        axis: "y",
        label: "Soil Doctor",
        barThickness: 35,
        barPercentage: .5,
        backgroundColor: "rgb(255,255,0)",
        borderColor: "rgb(255, 99, 132)",
        data: [ 34, 56, 22, 70, 4 , 56, 22, 19, 23, 9, 15, 33, 22],
      },
    ],
  };
  return (
    <div >
      <Bar data={data} options={options} className="bar" />
    </div>
  );
};

export default BarChart;