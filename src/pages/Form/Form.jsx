import React from 'react'
import logo from "../../images/logo.png"
import "./form.css"

function Form() {
  return (
    <div className='form'>
      <div className="form__header">
      <img className='home__header--logo' src ={logo} style={{ marginRight : "10px"}}/>
            <div className='home__header__name'>Soil <span>Doctor</span></div>
      </div>

      <div className="form__body">
        <form>
          <h3>Personali Details</h3>
          <label>Farmer's Name</label>
          <input></input>
          <label>Mobile No.</label>
          <input></input>
          <label>Location</label>
          <input></input>
          <label>Farm's Size</label>
          <input></input>
          <label>Farm's Name</label>
          <input></input>
          <label>Previous Crop</label>
          <input></input>

          <h3></h3>
        </form>


      </div>


    </div>
  )
}

export default Form