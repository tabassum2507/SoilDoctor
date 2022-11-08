import React from "react";
import logo from "../../images/logo.png";
import "./form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

function FormReport() {
  return (
    <div className="form">
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

      <div className="form__body">
        <form>
          <h3>Personal Details</h3>

          <Form className="form__details">
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="group">
                <Form.Label>Farmer's Name</Form.Label>
                <Form.Control required type="text" placeholder="Rahul Nagpal" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control required type="" placeholder="9988776655" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label>Location</Form.Label>
                <Form.Control required type="text" placeholder="Nuh" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>Farm's Size</Form.Label>
                <Form.Control required type="" placeholder="312 acre" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label>Farm's Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Gokuldham Farm"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label>Previous Crop</Form.Label>
                <Form.Control required type="text" placeholder="Rice" />
              </Form.Group>
            </Row>
          </Form>

          <h3>Lab Details</h3>

          <Form className="form__details">
            <Row className="mb-3">
            <Form.Group as={Col} md="4" className="group">
                <Form.Label>Date Of Collection</Form.Label>
                <Form.Control required type="date" ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>Sample Code</Form.Label>
                <Form.Control required type="" placeholder="rice009" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label>Sample Type</Form.Label>
                <Form.Control required type="text" placeholder="Clay" />
              </Form.Group>

            </Row>
          </Form>
          

          <h3>Soil Testing Result</h3>
          <Form className="form__details">
            <Row className="mb-3">

            <Form.Group as={Col} md="2" className="group">
                <Form.Label>pH</Form.Label>
                <Form.Control required type="number" placeholder="9" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>EC<span className="span__text">ds/m</span></Form.Label>
                <Form.Control required type="number" placeholder="" />
              </Form.Group>
             

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>OC<span className="span__text">g/kg</span></Form.Label>
                <Form.Control required type="number" placeholder="9" />
              </Form.Group>
    
             

              <Form.Group as={Col} md="3" className="group">
                <Form.Label>Microbes</Form.Label>
                <Form.Control required type="number" placeholder="493.09" />
              </Form.Group>
             
              <Form.Group as={Col} md="2" className="group">
                <Form.Label>Nitrogen<span className="span__text">kg/acre</span></Form.Label>
                <Form.Control required type="number" placeholder="9" />
              </Form.Group>
             

              <Form.Group as={Col} md="2" className="group">
                <Form.Label>Phosphorus<span className="span__text">kg/acre</span></Form.Label>
                <Form.Control required type="number" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="2" className="group">
                <Form.Label>Potassium<span className="span__text">kg/acre</span></Form.Label>
                <Form.Control required type="number" placeholder="" />
              </Form.Group>
             
             

            </Row>
          </Form>
          
        </form>
      </div>
    </div>
  );
}

export default FormReport;
