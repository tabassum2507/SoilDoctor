import React from "react";
import Chart from "chart.js/auto";
import logo from "../../images/logo.png";
import { Bar } from "react-chartjs-2";
import "./bar.css"



const data = JSON.parse(localStorage.getItem("data"));
console.log(data);



const BarChart = ({record}) => {

  let maxValue = record?.maxValue
  let name= record?.name
  let stepRange = record?.stepSize
  let result = record?.result
  let minRange = record?.minRange
  let maxRange = record?.maxRange

  const labels = [name] 

 

  const options = {
    indexAxis: 'y',
    width: 200,
    height: 400,
    maintainAspectRatio: false,
    scales: {
      x: {
          max: maxValue,
          min: 0, 
          ticks: {
            stepSize: stepRange
          }
      }
      
  },
    elements: {
      bar: { 
       
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
        label: result < minRange ? 'Low': result>= minRange && result <= maxRange? 'Sufficent': result > maxRange ? 'High': " ",
        barThickness: 40,
        barPercentage: .5,
        backgroundColor: result < minRange ? '#dc3912': result>= minRange && result <= maxRange? '#ff9900': result > maxRange ? '#ff9900': " ",
        borderColor: "rgb(255, 99, 132)",
        data: [ result ] 
      },
    ],
  };
  return (
    <>
    <div className="bar" >
       <Bar data={data} options={options}  style={{ height: "130px", width: "400px"}}/>
      </div>
    </>
       

  ); 
};

export default BarChart;