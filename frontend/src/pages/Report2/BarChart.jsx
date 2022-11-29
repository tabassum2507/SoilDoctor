import React from "react";
import Chart from "chart.js/auto";
import logo from "../../images/logo.png";
import { Bar } from "react-chartjs-2";
import "./bar.css"
import { PopoverHeader } from "react-bootstrap";

const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

const BarChart = ({value}) => {
  const labels = [" ", " ", " ", " ", " ", " ", " ", " "," ", " ", " ", " ", " ", " "];
  // const labels = ["pH", "EC", "OC", "Nitrogen", "Phosphorus", "Potassium", "Sulphur", "Iron", "Copper", "Zinc", "Boron", "Manganese", "Microbes"];

  const getData=[{name:'ph',result: 8 ,min:6.5,max:7.5},
  {name:'EC',result: 2,min:1,max:3},
  {name:'OC',result:value?.oc,min:5,max:7.6},
  {name:'Nitrogen',result:value?.nitrogen,min:28,max:56},
  {name:'Phosphorus',result:value?.phosphorus,min:28,max:56},
  {name:'Potassium',result:value?.potassium,min:14,max:28},
  {name:'Sulphur',result:value?.sulphur,min:10,max:20},
  {name:'Iron',result:value?.iron,min:4.5,max:9.5},
  {name:'Copper',result:value?.copper,min:0.2,max:1},
  {name:'Zinc',result:value?.zinc,min:0.6,max:1.5},
  {name:'Boron',result:value?.boron,min:0.1,max:0.5},
  {name:'Manganese',result:value?.manganese,min:2,max:4},
  {name:'Aluminum',result:value?.aluminum,min:2,max:4}]


  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
          max: 9,
          min: 0, 
          ticks: {
            stepSize: 3
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
        label: "Graph",
        barThickness: 40,
        barPercentage: .5,
        backgroundColor: getData.map((data)=> data.result < data.min ? '#dc3912': data.result>= data.min && data.result <= data.max? '#ff9900': data.result > data.max ? '#109618': " "),
        borderColor: "rgb(255, 99, 132)",
        data: getData.map((data)=> data.result)
      },
    ],
  };
  return (
    <>
    <div >
       <Bar data={data} options={options} className="bar" />
       </div>
           <div style={{position:'absolute', bottom:'0', right: '3.34%', display: 'flex'  , width: '58.9%', backgroundColor: "white", marginBottom: '24px', justifyContent: 'space-between'}}>
           <div style={{backgroundColor: '#dc3912', padding:'20px', width:"100%", color:'white'}}>Low</div>
           <div style={{backgroundColor: '#ff9900', padding:'20px', width:"100%", color:'white'}}>Sufficent</div>
           <div style={{backgroundColor: '#109618', padding:'20px', width:"100%", color:'white'}}>High</div>
           </div>
    </>
    

  ); 
};

export default BarChart;