import React from "react";
import ReactDOM from "react-dom";
import logo from "../../images/logo.png";
import ReactSpeedometer from "react-d3-speedometer";
import FormRe from "../Form/FormRe";
import "./report.css";

function Report() {
  return (
    <>
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

      <div className="Physical">
        <div className="physicalPara"><h1>Physical Parameters</h1></div>
        
        <div className="phy">

        <div className="Report">
        <ReactSpeedometer
          value={5}
          // width={300}
          // height={500}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          customSegmentStops={[0, 6.5, 7.5 , 14]}
          segmentColors={[
            "#dc3912",
            "#ff9900 ",
            
            "#109618 "
          ]}
          currentValueText={"pH: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={2}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={6}
          paddingHorizontal={29}
          paddingVertical={29}
          customSegmentStops={[0, 1.9, 3 , 6]}
          segmentColors={[
            " #ff5733 ",
            "#228B22",
            "#ffe933 "
          ]}
          currentValueText={"EC: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={6}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={10}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"OC: ${value}"}
          textColor= {"#113e21"}
        />
        </div>
        </div>
        
        
      </div>

      <div className="Physical">
        <div className="physicalPara"><h1>Macro Parameters</h1></div>
        
        <div className="phy">

        <div className="Report">
        <ReactSpeedometer
          value={70.8}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={800}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"Nitrogen: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={18}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={55}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"P: ${value}"}
          textColor= {"#113e21"}
        />
        </div>


        <div className="Report">
        <ReactSpeedometer
          value={280}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={500}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"K: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={10}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={25}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"S: ${value}"}
          textColor= {"#113e21"}
        />
        </div>
        </div>

        <div className="physicalPara"><h1>Physical Parameters</h1></div>
        
        <div className="phy grid">

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
          textColor= {"#113e21"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

       

        {/* <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div> */}

        {/* <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div> */}

        {/* <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div>

        <div className="Report">
        <ReactSpeedometer
          value={5}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={14}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"pH: ${value}"}
        />
        </div> */}




      </div>

        
        
      </div>

      
  </>

  );
}

export default Report;
