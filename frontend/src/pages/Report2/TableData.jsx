import { React, useRef } from "react";
import logo from "../../images/logo.png";
import "./table.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormRe from "../Form/FormRe";
import "../Report/report.css";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import BarGraph from "./BarGraph";


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

export default function TableData(data) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "graph-data",
    // onAfterPrint: () => alert("print successfully"),
  });



  return (
    <div>
      <div className="form__header">
        <img
          className="home__header--logo"
          src={logo}
          style={{ marginRight: "10px" }}
        />
        <div className="home__header__name">
          Soil <span>Doctor</span>
        </div>
      </div>

      <FormControl class="radio">
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <Link to="/graph">
            <FormControlLabel
              className="text__form"
              value=""
              control={<Radio color="success" size="medium" />}
              label="Simple Report"
            />
          </Link>

          <FormControlLabel
            className="text__form"
            value=""
            control={<Radio color="success" size="medium" />}
            label="Detailed Report"
          />
          <Link to="/both">
            <FormControlLabel
              className="text__form"
              value="other"
              control={<Radio color="success" size="medium" />}
              label="Both Reports"
            />
          </Link>
        </RadioGroup>
      </FormControl>

      <div className="paper">
        <div
          className="print"
          style={{ width: "100%", height: "100%" }}
          ref={componentRef}
        >
          <div className="report__header">
            <div className="report__logo">
              <img
                className="header__logo"
                src={logo}
                style={{ marginRight: "10px" }}
              />

              <div className="header__name">Soil Doctor</div>
            </div>

            <div className="header__heading">Soil Analysis Report</div>
          </div>

          <div className="info">
            <div className="detail__section">
              <div>
                <span className="detail__section--label">Name:</span>
                {name}
              </div>
              <div>
                <span className="detail__section--label">Mobile No.:</span>
                {mobile}
              </div>
              <div>
                <span className="detail__section--label">Location:</span>
                {location}
              </div>
              <div>
                <span className="detail__section--label">Previous Crop:</span>
                {previousCrop}
              </div>
              <div>
                <span className="detail__section--label">Farm Size:</span>
                {farmSize}
              </div>
              <div>
                <span className="detail__section--label">Farm Name:</span>
                {farmName}
              </div>
            </div>
          </div>

          <div className="soil__info">
            <div className="detail__section">
              <div>
                <span className="soil__text">Date of Collection:</span>
                {date}
              </div>
              <div>
                <span className="soil__text">Sample Code:</span>
                {sampleCode}
              </div>
              <div>
                <span className="soil__text">Sample Type:</span>
                {sampleType}
              </div>
            </div>
          </div>

          <div className="table__bar">
            <div className="para_table">
              <div className="physical__data">
                <h1 className="data__name">Physical</h1>

                <div className="tableData">
                  <table >
                    <tr>
                      <th  className="table__padding">Parameter</th>
                      <th>Result</th>
                      <th className="range__padding">Range</th>
                    </tr>
                    <tr>
                      <td  className="table__padding">pH</td>
                      <td className="result_value">{ph}</td>
                      <td className="range__padding">6.5 - 7.5</td>
                    </tr>

                    <tr>
                      <td  className="table__padding">EC<br /><span>(ds/m)</span></td>
                      <td className="result_value" >{ec}</td>
                      <td className="range__padding">2 - 3</td>
                    </tr>

                    <tr>
                      <td  className="table__padding">OC<br /><span>(g/kg)</span></td>
                      <td className="result_value">{oc}</td>
                      <td className="range__padding">6 - 7.5</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="macro__data">
                <h1 className="data__name">Macro</h1>

                <div className="tableData">
                  <table>
                    <tr>
                      <td  className="table__padding">Nitrogen<br /><span>(kg/hec)</span></td>
                      <td className="result_value">{nitrogen}</td>
                      <td className="range__padding">280-560</td>
                    </tr>

                    <tr>
                      <td  className="table__padding">Phosphorus<br /><span>(kg/hec)</span></td>
                      <td className="result_value">{phosphorus}</td>
                      <td className="range__padding">28 - 56</td>
                    </tr>

                    <tr>
                      <td  className="table__padding">Potassium<br /><span>(kg/hec)</span></td>
                      <td className="result_value">{potassium}</td>
                      <td className="range__padding">140-280</td>
                    </tr>

                    <tr>
                      <td  className="table__padding">Sulphur<br /><span>(kg/hec)</span></td>
                      <td className="result_value">{sulphur}</td>
                      <td className="range__padding">10-20</td>
                    </tr>
                  </table>
                </div>

                <div className="macro__data">
                  <h1 className="data__name">Micro</h1>

                  <div className="tableData">
                    <table>
                      <tr>
                        <td  className="table__padding">Iron<br /><span>(mg/kg)</span></td>
                        <td className="result_value">{iron}</td>
                        <td className="range__padding">4.5 - 9.5</td>
                      </tr>

                      <tr>
                        <td  className="table__padding">Copper<br /><span>(mg/kg)</span></td>
                        <td className="result_value">{copper}</td>
                        <td className="range__padding">0.2 - 1</td>
                      </tr>

                      <tr>
                        <td  className="table__padding">Zinc<br /><span>(mg/kg)</span></td>
                        <td className="result_value">{zinc}</td>
                        <td className="range__padding">0.6-1.5</td>
                      </tr>

                      <tr>
                        <td  className="table__padding">Boron<br /><span>(mg/kg)</span></td>
                        <td className="result_value">{boron}</td>
                        <td className="range__padding">0.1 - 0.5</td>
                      </tr>

                      <tr>
                        <td  className="table__padding">Manganese<br /><span>(mg/kg)</span></td>
                        <td className="result_value">{manganese}</td>
                        <td className="range__padding">2 - 4</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bar_table">
              <div><BarChart record={PH} className="barchart" /></div>
              <div><BarChart record={EC} className="barchart" /></div>
              <div><BarChart record={OC} className="barchart" /></div>
              
             
              

              <div className="macro_bar">
              <div><BarChart record={Nitrogen} className="barchart" /></div>
              <div><BarChart record={Phosphorus}className="barchart" /></div>
              <div><BarChart record={Potassium} className="barchart" /></div>
              <div><BarChart record={Sulphur} className="barchart" /></div>
              
             

              </div>

              <div className="macro_bar">
              <BarChart record={Iron} className="barchart" />
              <BarChart record={Copper} className="barchart" />
              <BarChart record={Zinc} className="barchart" />
              <BarChart record={Boron} className="barchart" />
              <BarChart record={Manganese} className="barchart" />

              </div>
             
              
            </div> */}

           <BarGraph />




          </div>

          <div className="remark" >
            <div>{area}</div>
          </div>

          <div className="note__section">
            <div>NOTE:</div>
            <ul >
              <li>
                This report shows the fertility status of the given sample. It
                doesn't guarantee crop production.{" "}
              </li>
              <li>
                Reports prepared by instruments which may contain slight errors
                at times.
              </li>
            </ul>
          </div>

          <div className="report__footer">
            <div className="report__footer--grid">
              <div>
                <span className="soil__text">
                  Prepared under the supervision:
                  <br />
                </span>
                Megha Jangra(Master's of Science in Chemistry)
              </div>

              <div>
                <span className="soil__text">
                  Contact Us:
                  <br />
                </span>
                8150085009(Saumya)
              </div>

              <div>
                <span className="soil__text">
                  Email Us:
                  <br />
                </span>
                hello@soildoctor.in
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="table_button" onClick={handlePrint}>
        <button type="submit">
          Download <HiChevronRight style={{ marginLeft: "20px" }} />
        </button>
      </div>
    </div>
  );
}
