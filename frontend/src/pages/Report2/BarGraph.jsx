import zIndex from "@mui/material/styles/zIndex";
import { width } from "@mui/system";
import React from "react";
import "./barGraph.css";

const data = JSON.parse(localStorage.getItem("data"));

let name = data?.name;
let mobile = data?.mobile;
let location = data?.location;
let farmName = data?.farmName;
let farmSize = data?.farmSize;
let previousCrop = data?.previousCrop;
let date = data?.date;
let sampleCode = data?.sampleCode;
let sampleType = data?.sampleType;
let oc = data?.oc;
let microbes = data?.microbes;
let nitrogen = data?.nitrogen;
let phosphorus = data?.phosphorus;
let potassium = data?.potassium;
let calcium = data?.calcium;
let sulphur = data?.sulphur;
let iron = data?.iron;
let copper = data?.copper;
let zinc = data?.zinc;
let boron = data?.boron;
let nickle = data?.nickle;
let manganese = data?.manganese;
let chlorine = data?.chlorine;
let area = data?.area;

function BarGraph() {

  const ph__value = (data?.ph/14)*100;
  const ec__value = (data?.ec/4)*100;
  const oc__value = (data?.oc/9)*100;
  const nitrogen__value = (data?.nitrogen/300)*100
  const phosphoru__value = (data?.phosphorus/75)*100
  const potassium__value = (data?.potassium/300)*100
  const sulphur__value = (data?.sulphur/30)*100
  const iron__value =  (data?.iron/ 11)*100
  const copper__value = (data?.copper/2)*100
  const zinc__value = (data?.zinc/3)*100
  const boron__value = (data?.boron/2)*100
  const manganese__value = (data?.manganese/5)*100
 

 
  

 


  return (
    <div>
      <div className="graph">
        <section>
          <div className="range">
            <div className="charts">
              <div className="chaer chart--para">
                <ul className="chart--horizon">
                  <li
                    className={ `${ph__value < 33 ? "low" : ph__value >= 33 && ph__value <= 66 ? "sufficient": ph__value > 66 ? "high" : " " }`}
                    style={{width: `${ph__value+ "%"}`}}>
                  
                    <span className="chart__label">{data?.ph}</span>
                  </li>

                  <li
                    className={ `${ec__value < 33 ? "low" : ec__value >= 33 && ec__value <= 66 ? "sufficient": ec__value > 66 ? "high" : " " }`}
                    style={{width: `${ec__value+ "%"}` }}>
                    <span className="chart__label">{data?.ec}(ds/m)</span>
                  </li>

                  <li
                    className={ `${ec__value < 33 ? "low" : ec__value >= 33 && ec__value <= 66 ? "sufficient": ec__value > 66 ? "high" : " " }`}
                    style={{width: `${oc__value+ "%"}` }}>
                    <span className="chart__label">{data?.oc}(g/kg)</span>
                  </li>
                </ul>
 
              </div>
            </div>
          </div>

          <div className="range second">
            <div className="charts">
              <div className="chaer chart--para">
                <ul className="chart--horizon">
                <li
                    className={ `${nitrogen__value < 33 ? "low" : nitrogen__value >= 33 && nitrogen__value <= 66 ? "sufficient": nitrogen__value > 66 ? "high" : " " }`}
                    style={{width: `${nitrogen__value+ "%"}` }}>
                  
                    <span className="chart__label">{data?.nitrogen}</span>
                  </li>

                  <li
                    className={ `${phosphoru__value < 33 ? "low" : phosphoru__value >= 33 && phosphoru__value <= 66 ? "sufficient": phosphoru__value > 66 ? "high" : " " }`}
                    style={{width: `${phosphoru__value+ "%"}` }}>
                    <span className="chart__label">{data?.phosphorus}(kg/hec)</span>
                  </li>

                  <li
                    className={ `${potassium__value < 33 ? "low" : potassium__value >= 33 && potassium__value <= 66 ? "sufficient": potassium__value > 66 ? "high" : " " }`}
                    style={{width: `${potassium__value+ "%"}` }}>
                    <span className="chart__label">{data?.potassium}(kg/hec)</span>
                  </li>

                  <li
                    className={ `${sulphur__value < 33 ? "low" : sulphur__value >= 33 && sulphur__value <= 66 ? "sufficient": sulphur__value > 66 ? "high" : " " }`}
                    style={{width: `${sulphur__value+ "%"}` }}>
                    <span className="chart__label">{data?.sulphur}(kg/hec)</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="range three">
            <div className="charts">
              <div className=" chart--para">
                <ul className="chart--horizon">
                <li
                    className={ `${iron__value < 33 ? "low" : iron__value >= 33 && iron__value <= 66 ? "sufficient": iron__value > 66 ? "high" : " " }`}
                    style={{width: `${iron__value+ "%"}` }}>
                    <span className="chart__label">{data?.iron}(kg/hec)</span>
                  </li>

                  <li
                    className={ `${copper__value < 33 ? "low" : copper__value >= 33 && copper__value <= 66 ? "sufficient": copper__value > 66 ? "high" : " " }`}
                    style={{width: `${copper__value+ "%"}` }}>
                    <span className="chart__label">{data?.copper}(kg/hec)</span>
                  </li>

                  <li
                    className={ `${zinc__value < 33 ? "low" : zinc__value >= 33 && zinc__value <= 66 ? "sufficient": zinc__value > 66 ? "high" : " " }`}
                    style={{width: `${zinc__value+ "%"}` }}>
                    <span className="chart__label">{data?.zinc}(kg/hec)</span>
                  </li>

                  <li
                    className={ `${boron__value < 33 ? "low" : boron__value >= 33 && boron__value <= 66 ? "sufficient": boron__value > 66 ? "high" : " " }`}
                    style={{width: `${boron__value+ "%"}` }}>
                    <span className="chart__label">{data?.boron}(mg/kg)</span>
                  </li>

                  <li
                    className={ `${manganese__value < 33 ? "low" : manganese__value >= 33 && manganese__value <= 66 ? "sufficient": manganese__value > 66 ? "high" : " " }`}
                    style={{width: `${manganese__value+ "%"}` }}>
                    <span className="chart__label">{data?.manganese}(mg/kg)</span>
                  </li>
                </ul>


                <div
                  style={{
                    position: "relative",
                    bottom: "-.75%",
                    right: "5.9%",
                    display: "flex",
                    width: "50%",
                    backgroundColor: "white",
                    marginBottom: "0",
                    justifyContent: "space-between",
                    marginRight: "0px",
                    
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#dc3912",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    Low
                  </div>
                  <div
                    style={{
                      backgroundColor: "#109618",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    Sufficent
                  </div>
                  <div
                    style={{
                      backgroundColor: "#ff9900",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    High
                  </div>
                

                <div
                  style={{
                    position: "absolute",
                    bottom: "-0.75%",
                    right: "",
                    display: "flex",
                    width: "100%",
                    height: "960px",
                    backgroundColor: "white",
                    marginBottom: "0",
                    justifyContent: "space-between",
                    marginRight: "0px",
                    zIndex: -1,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#fceceb",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                   
                  </div>
                  <div
                    style={{
                      backgroundColor: "#ebf5eb",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff5e6",
                      padding: "20px",
                      width: "100%",
                      color: "white",
                    }}
                  >
                    
                  </div>

                </div>



                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BarGraph;
