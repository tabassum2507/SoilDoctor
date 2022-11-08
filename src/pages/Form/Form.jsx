import React from 'react'
import logo from "../../images/logo.png"
import "./form.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function Form() {
  return (
    <div className='form'>
      <div className="form__header">
      <img className='home__header--logo' src ={logo} style={{ marginRight : "10px"}}/>
            <div className='home__header__name'>Soil <span>Doctor</span></div>
      </div>

      <div className="form__body">
        <form>
          <h3>Personal Details</h3>
          {/* <Row className="mb-3">
            <Form.Group as={Col} md="2">
              <Form.Label>
                Farmer's Name
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Farmer's Name"
                defaultValue="Mark"
              />
            
            </Form.Group>
          </Row> */}

<Button as="a" variant="primary">
    Button as link
  </Button>


      
    
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

          <h3>Lab Details</h3>
          <label>Farmer's Name</label>
          <input></input>
          <label>Sample Code</label>
          <input></input>
          <label>Sample Type</label>
          <input></input>

          <h3>Soil Testing Result</h3>
          <label>pH</label>
          <input></input>
          <label>EC(ds/m)</label>
          <input></input>
          <label>OC(g/kg)</label>
          <input></input>
          <label>Microbes</label>
          <input></input>
          <label>Nitrogen(kg/acre)</label>
          <input></input>
          <label>Phosphorus(kg/acre)</label>
          <input></input>
          <label>Potassium(kg/acre)</label>
          <input></input>
          <label>Sulphur(mg/kg)</label>
          <input></input>
          <label>Iron(mg/kg)</label>
          <input></input>
          <label>Copper(mg/kg)</label>
          <input></input>
          <label>Zinc(mg/kg)</label>
          <input></input>
          <label>Boron(mg/kg)</label>
          <input></input>
          <label>Manganese(mg/kg)</label>
          <input></input>
        </form>


      </div>


    </div>
  )
}

export default Form