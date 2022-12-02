import React from 'react'
import './barGraph.css'



const data = JSON.parse(localStorage.getItem("data"));

let ph = data?.ph
let name = data?.name
let mobile = data?.mobile 
let location =  data?.location
let farmName = data?.farmName
let farmSize = data?.farmSize
let previousCrop = data?.previousCrop
let date = data?.date
let sampleCode = data?.sampleCode
let sampleType = data?.sampleType
let ec = data?.ec
let oc = data?.oc
let microbes = data?.microbes
let nitrogen = data?.nitrogen
let phosphorus = data?.phosphorus
let potassium = data?.potassium
let calcium = data?.calcium
let sulphur = data?.sulphur
let iron = data?.iron
let copper = data?.copper
let zinc = data?.zinc
let boron = data?.boron
let nickle = data?.nickle
let manganese = data?.manganese
let chlorine = data?.chlorine
let area = data?.area


function BarGraph() {
  return (
    <div>
         <div className="graph">
              <section>

              <div className='range'>
                

                <div className='charts'>
                  <div className='chaer chart--para'>
                    <ul className='chart--horizon'>
                    <li className='chart__bar'>
                      <span className='chart__label'>pH</span>
                    </li>

                    <li className='chart__bar'>
                      <span className='chart__label'>EC</span>
                    </li>

                    <li className='chart__bar'>
                      <span className='chart__label'>OC</span>
                    </li>

                    
                    </ul>

                    <div className='color_range'>
                        
                    <ul className='lines'>
                  <li className='line l--25'>
                    <span className='line__label title'>
                      Low 
                    </span>

                  </li>
                </ul>

                <ul className='lines'>
                  <li className='lines l--50'>
                    <span className='line__label title'>
                      Sufficient
                    </span>

                  </li>
                </ul>

                <ul className='lines'>
                  <li className='lines l--75'>
                    <span className='line__label title'>
                      High
                    </span>

                  </li>
                </ul>
                    </div>

                  </div>

                </div>

                </div>

               
             


              </section>

            </div>


    </div>
  )
}

export default BarGraph