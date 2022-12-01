import { React, useRef } from "react";
import logo from "../../images/logo.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BarChart from "./BarChart";
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

  const PH = {name: 'ph', result: ph , maxValue: 14, stepSize: 0.5, minRange: 6.5, maxRange: 7.5};
  const EC = {name: 'ec', result: ec, maxValue: 4, stepSize: 0.4 , minRange: 1 , maxRange: 3 };
  const OC = {name: 'oc', result: oc, maxValue: 9,  stepSize: .7 , minRange: 5 , maxRange: 7.5 };
  const Nitrogen = {name: 'N', result: nitrogen, maxValue: 600,  stepSize: 50 , minRange: 240, maxRange: 560 };
   const Phosphorus = {name: 'P', result: phosphorus, maxValue: 60,  stepSize: 7 , minRange: 11, maxRange: 25 };
   const Potassium = {name: 'K', result: potassium, maxValue: 330,  stepSize: 30 , minRange: 110, maxRange: 280 };
  const Sulphur = {name: 'S', result: sulphur, maxValue: 30,  stepSize: 3 , minRange: 10, maxRange: 20};
  const Iron = {name: 'Fe', result: iron, maxValue: 12,  stepSize: 2 , minRange:5.5, maxRange: 9.5 };
  const Copper = {name: 'Cu', result: copper, maxValue: 2,  stepSize: 0.2 , minRange: 0.2, maxRange: 0.4 };
  const Zinc = {name: 'Zn', result: zinc, maxValue: 3,  stepSize: 0.3 , minRange: 0.6, maxRange: 1.2 };
  const Boron = {name: 'B', result: boron, maxValue: 1.5,  stepSize: 0.2 , minRange: 0.5, maxRange: 1 };
  const Manganese = {name: 'Mn', result: manganese, maxValue: 12,  stepSize: 1 , minRange: 5.5, maxRange: 9.5 };



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
                  <table className="tableBox">
                    <tr>
                      <th>Parameter</th>
                      <th>Result</th>
                      <th>Range</th>
                    </tr>
                    <tr>
                      <td>pH</td>
                      <td>{ph}</td>
                      <td>6.5 - 7.5</td>
                    </tr>

                    <tr>
                      <td>EC<br /><span>(ds/m)</span></td>
                      <td>{ec}</td>
                      <td>2 - 3</td>
                    </tr>

                    <tr>
                      <td>OC<br /><span>(g/kg)</span></td>
                      <td>{oc}</td>
                      <td>6 - 7.5</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div className="macro__data">
                <h1 className="data__name">Macro</h1>

                <div className="tableData">
                  <table>
                    <tr className="tableBox">
                      <th>Parameter</th>
                      <th>Result</th>
                      <th>Range</th>
                    </tr>
                    <tr>
                      <td>Nitrogen<br /><span>(kg/hec)</span></td>
                      <td>{nitrogen}</td>
                      <td>280-560</td>
                    </tr>

                    <tr>
                      <td>Phosphorus<br /><span>(kg/hec)</span></td>
                      <td>{phosphorus}</td>
                      <td>28 - 56</td>
                    </tr>

                    <tr>
                      <td>Potassium<br /><span>(kg/hec)</span></td>
                      <td>{potassium}</td>
                      <td>140-280</td>
                    </tr>

                    <tr>
                      <td>Sulphur<br /><span>(kg/hec)</span></td>
                      <td>{sulphur}</td>
                      <td>10-20</td>
                    </tr>
                  </table>
                </div>

                <div className="macro__data">
                  <h1 className="data__name">Micro</h1>

                  <div className="tableData">
                    <table>
                      <tr className="tableBox">
                        <th>Parameter<br /><span>(mg/kg)</span></th>
                        <th>Result</th>
                        <th>Range</th>
                      </tr>
                      <tr>
                        <td>Iron<br /><span>(mg/kg)</span></td>
                        <td>{iron}</td>
                        <td>4.5 - 9.5</td>
                      </tr>

                      <tr>
                        <td>Copper<br /><span>(mg/kg)</span></td>
                        <td>{copper}</td>
                        <td>0.2 - 1</td>
                      </tr>

                      <tr>
                        <td>Zinc<br /><span>(mg/kg)</span></td>
                        <td>{zinc}</td>
                        <td>0.6 - 1.5</td>
                      </tr>

                      <tr>
                        <td>Boron<br /><span>(mg/kg)</span></td>
                        <td>{boron}</td>
                        <td>0.1 - 0.5</td>
                      </tr>

                      <tr>
                        <td>Manganese<br /><span>(mg/kg)</span></td>
                        <td>{manganese}</td>
                        <td>2 - 4</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="bar_table">
              <BarChart record={PH} className="barchart" />
              <BarChart record={EC} className="barchart" />
              <BarChart record={OC} className="barchart" />

              <div className="macro_bar">
              <BarChart record={Nitrogen} className="barchart" />
              <BarChart record={Phosphorus}className="barchart" />
              <BarChart record={Potassium} className="barchart" />
              <BarChart record={Sulphur} className="barchart" />

              </div>

              <div className="macro_bar">
              <BarChart record={Iron} className="barchart" />
              <BarChart record={Copper} className="barchart" />
              <BarChart record={Zinc} className="barchart" />
              <BarChart record={Boron} className="barchart" />
              <BarChart record={Manganese} className="barchart" />

              </div>
             
              
            </div>
          </div>

          <div className="remark">
            <div>{area}</div>
          </div>

          <div className="note__section">
            <div>NOTE:</div>
            <ul>
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
