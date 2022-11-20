import React from "react";
import ReactDOM from "react-dom";
import logo from "../../images/logo.png";
import ReactSpeedometer from "react-d3-speedometer";

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
          value={2}
          labelFontSize={"15px"}
          valueTextFontSize={"20px"}
          maxValue={5}
          paddingHorizontal={29}
          paddingVertical={29}
          currentValueText={"EC: ${value}"}
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
        />
        </div>
        </div>

        <div className="physicalPara"><h1>Physical Parameters</h1></div>
        
        <div className="phy">

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




      </div>

        
        
      </div>

      
  </>

  );
}

export default Report;
