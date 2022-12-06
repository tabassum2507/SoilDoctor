import { React, useRef } from "react";
import logo from "../../images/logo.png";
import ReactSpeedometer from "react-d3-speedometer";
import "../Report/Report";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { useReactToPrint } from "react-to-print";

const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

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

function Both({}) {
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
          <FormControlLabel
            className="text__form"
            value="female"
            control={<Radio color="success" size="medium" />}
            label="Simple Report"
          />
          <Link to="/report">
            <FormControlLabel
              className="text__form"
              value="male"
              control={<Radio color="success" size="medium" />}
              label="Detailed Report"
            />
          </Link>
          <FormControlLabel
            className="text__form"
            value="other"
            control={<Radio color="success" size="medium" />}
            label="Both Reports"
          />
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
                {data?.name}
              </div>
              <div>
                <span className="detail__section--label">Mobile No.:</span>
                {data?.mobile}
              </div>
              <div>
                <span className="detail__section--label">Location:</span>
                {data?.location}
              </div>
              <div>
                <span className="detail__section--label">Previous Crop:</span>
                {data?.previousCrop}
              </div>
              <div>
                <span className="detail__section--label">Farm Size:</span>
                {data?.farmSize}
              </div>
              <div>
                <span className="detail__section--label">Farm Name:</span>
                {data?.farmName}
              </div>
            </div>
          </div>

          <div className="soil__info">
            <div className="detail__section">
              <div>
                <span className="soil__text">Date of Collection:</span>
                {data?.date}
              </div>
              <div>
                <span className="soil__text">Sample Code:</span>
                {data?.sampleCode}
              </div>
              <div>
                <span className="soil__text">Sample Type:</span>
                {data?.sampleType}
              </div>
            </div>
          </div>

          <div className="Physical">
            <div className="physicalPara">
              <h1>Physical Parameters</h1>
            </div>

            <div className="phy">
              <div className="Report">
                <ReactSpeedometer
                  value={data?.ph}
                  labelFontSize={"11px"}
                  valueTextFontSize={"14px"}
                  maxValue={14}
                  paddingHorizontal={19}
                  paddingVertical={19}
                  customSegmentStops={[0, 6.5, 7.5, 14]}
                  segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                  currentValueText={"pH: ${value}"}
                  textColor={"#113e21"}
                  ringWidth={20}
                  height={120}
                  width={240}
                />
                <div className="data_rec">
                  {data?.ph < 6
                    ? `Add 162(Kg/Acre) of Lime`
                    : data?.ph >= 6 && data?.ph <= 7.5
                    ? " "
                    : data?.ph > 7.5
                    ? "Add 101(Kg/Acre) of Gypsum"
                    : " "}
                </div>
              </div>

              <div className="Report">
                <ReactSpeedometer
                  value={data?.ec}
                  labelFontSize={"11px"}
                  valueTextFontSize={"14px"}
                  maxValue={6}
                  paddingHorizontal={19}
                  paddingVertical={19}
                  customSegmentStops={[0, 1.9, 3, 6]}
                  segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                  currentValueText={"EC(ds/m): ${value}"}
                  textColor={"#113e21"}
                  ringWidth={20}
                  height={120}
                  width={240}
                  className="speedometer"
                />
                <div className="data_rec">
                  {data?.ec < 1
                    ? "    "
                    : data?.ec >= 1 && data?.ec <= 3
                    ? " "
                    : data?.ec > 3
                    ? " "
                    : " "}
                </div>
              </div>

              <div className="Report">
                <ReactSpeedometer
                  value={data?.oc}
                  labelFontSize={"11px"}
                  valueTextFontSize={"14px"}
                  maxValue={1}
                  paddingHorizontal={19}
                  paddingVertical={19}
                  customSegmentStops={[0, 0.5, 0.75, 1]}
                  segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                  currentValueText={"OC: ${value}"}
                  textColor={"#113e21"}
                  ringWidth={20}
                  height={120}
                  width={240}
                />
                <div className="data_rec">
                  {data?.oc < 0.5
                    ? "Add 2023(Kg/Acre) of Farm Yard Manure"
                    : data?.oc >= 0.5 && data?.oc <= 0.75
                    ? "Add 1667(Kg/Acre) of Farm Yard Manure "
                    : data?.ec > 1
                    ? "Add 405(Kg/Acre) of Farm Yard Manure "
                    : " "}
                </div>
              </div>
            </div>

            <div className="Physical">
              <div className="physicalPara">
                <h1>Macro Parameters</h1>
              </div>

              <div className="phy">
                <div className="Report">
                  <ReactSpeedometer
                    value={data?.nitrogen}
                    labelFontSize={"11px"}
                    valueTextFontSize={"14px"}
                    maxValue={1000}
                    paddingHorizontal={19}
                    paddingVertical={19}
                    customSegmentStops={[0, 250, 560, 1000]}
                    segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                    currentValueText={"Nitrogen(Kg/hec): ${value}"}
                    textColor={"#113e21"}
                    ringWidth={20}
                    height={120}
                    width={240}
                  />
                  <div className="data_rec">
                    {data?.nitrogen < 280
                      ? "Add 137(Kg/Acre) of Neam coated Urea"
                      : data?.nitrogen >= 280 && data?.nitrogen <= 560
                      ? "Add 105(Kg/Acre) of Neam coated Urea "
                      : data?.nitrogen > 560
                      ? "Add 74(Kg/Acre) of Neam coated Urea "
                      : " "}
                  </div>
                </div>

                <div className="Report">
                  <ReactSpeedometer
                    value={data?.phosphorus}
                    labelFontSize={"11px"}
                    valueTextFontSize={"14px"}
                    maxValue={100}
                    paddingHorizontal={19}
                    paddingVertical={19}
                    customSegmentStops={[0, 20, 66, 100]}
                    segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                    currentValueText={"Phosphorus(Kg/hec): ${value}"}
                    textColor={"#113e21"}
                  
                    ringWidth={20}
                    height={120}
                  width={240}
                  />
                  <div className="data_rec">
                    {data?.phosphorus < 10
                      ? "Add 132(Kg/Acre) of SSP"
                      : data?.phosphorus >= 10 && data?.phosphorus <= 25
                      ? "Add 101(Kg/Acre) of SSP"
                      : data?.phosphorus > 25
                      ? "Add 71(Kg/Acre) of SSP "
                      : " "}
                  </div>
                </div>

                <div className="Report">
                  <ReactSpeedometer
                    value={data?.potassium}
                    labelFontSize={"11px"}
                    valueTextFontSize={"14px"}
                    maxValue={500}
                    paddingHorizontal={19}
                    paddingVertical={19}
                    customSegmentStops={[0, 140, 280, 500]}
                    segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                    currentValueText={"Potassium(Kg/hec): ${value}"}
                    textColor={"#113e21"}
                    
                    ringWidth={20}
                    height={120}
                  width={240}
                  />
                  <div className="data_rec">
                    {data?.potassium < 108
                      ? "Add 35(Kg/Acre) of MOP"
                      : data?.potassium >= 108 && data?.potassium <= 280
                      ? "Add 27(Kg/Acre) of MOP"
                      : data?.potassium > 280
                      ? "Add 19(Kg/Acre) of MOP "
                      : " "}
                  </div>
                </div>

                <div className="Report">
                  <ReactSpeedometer
                    value={data?.sulphur}
                    labelFontSize={"11px"}
                    valueTextFontSize={"14px"}
                    maxValue={50}
                    paddingHorizontal={19}
                    paddingVertical={19}
                    customSegmentStops={[0, 10, 20, 50]}
                    segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                    currentValueText={"Sulphur(mg/kg): ${value}"}
                    textColor={"#113e21"}
                    
                    ringWidth={20}
                    height={120}
                    width={240}
                  />
                  <div className="data_rec">
                    {data?.sulphur < 10 ? "Add 16(Kg/Acre) of Sulphate" : " "}
                  </div>
                </div>
              </div>

              <div className="Physical">
                <div className="physicalPara ">
                  <h1>Micro Parameters</h1>
                </div>

                <div className="phy grid">
                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.iron}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={20}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 5.5, 9.5, 20]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Iron(mg/kg): ${value}"}
                      
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                    <div className="data_rec">
                      {data?.iron < 5.5
                        ? "Add 10(Kg/Acre) of Ferrous Sulphate"
                        : " "}
                    </div>
                  </div>

                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.copper}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={3}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 0.2, 1, 3]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Copper(mg/kg): ${value}"}
                      
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                    <div className="data_rec">
                      {data?.copper < 0.2
                        ? "Add 2(Kg/Acre) of Copper Sulphate"
                        : " "}
                    </div>
                  </div>

                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.zinc}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={5}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 0.6, 1.5, 5]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Zinc(mg/kg): ${value}"}
                      
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                    <div className="data_rec">
                      {data?.zinc < 0.6
                        ? "Add 10(Kg/Acre) of Zinc Sulphate"
                        : " "}
                    </div>
                  </div>

                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.boron}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={3}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 0.5, 1, 3]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Boron(mg/kg) : ${value}"}
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                    <div className="data_rec">
                      {data?.boron < 0.5 ? "Add 2(Kg/Acre) of Borax" : " "}
                    </div>
                  </div>

                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.nickle}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={15}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 5.5, 9.5, 15]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Nickle(mg/kg) : ${value}"}
            
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                  </div>

                  <div className="Report">
                    <ReactSpeedometer
                      value={data?.aluminum}
                      labelFontSize={"11px"}
                      valueTextFontSize={"14px"}
                      maxValue={15}
                      paddingHorizontal={19}
                      paddingVertical={19}
                      customSegmentStops={[0, 5.5, 9.5, 15]}
                      segmentColors={["#dc3912", "#ff9900 ", "#109618 "]}
                      currentValueText={"Aluminum(mg/kg) : ${value}"}
                      
                      textColor={"#113e21"}
                      ringWidth={20}
                      height={120}
                      width={240}
                    />
                  </div>
                </div>
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

          <div className="remark">
            <div>{data?.area}</div>
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

             <div><span className="soil__text">Prepared under the supervision:<br /></span>Megha Jangra(Master's of Science in Chemistry)</div>

             <div><span className="soil__text">Contact Us:<br /></span>8150085009(Saumya)</div>

             <div><span className="soil__text">Email Us:<br /></span>hello@soildoctor.in</div>

            </div>

          </div>

          
        </div>
      </div>

      <div className="report_button" onClick={handlePrint}>
        <button type="submit">
          Download <HiChevronRight style={{ marginLeft: "20px" }} />
        </button>
      </div>
    </div>
  </div>
  );
}

export default Both;