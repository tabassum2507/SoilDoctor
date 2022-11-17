import React from "react";
import logo from "../../images/logo.png";
import "./form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import { Formik, useFormik } from 'formik';
import { schema } from "./schema";



// const initialValues = {
//   name: " ",
//   mobile: " ",
//   location: " ",
//   farmName: " ",
//   farmSize: " ",
//   previousCrop: " ",
//   date: " ",
//   sampleCode: " ",
//   sampleType: " ",
//   ph: " ",
//   ec: " ",
//   oc: " ",
//   microbes: " ",
//   nitrogen: " ",
//   phosphorus: " ",
//   potassium: " ",
//   sulphur: " ",
//   iron:" ",
//   copper: " ",
//   zinc: " ",
//   boron:  " ",
//   managanese: " "





// };

function FormReport() {

//  const{ values, errors, touched, handleChange, handleSubmit } = 
//  useFormik({
//   initialValues,
//   validationSchema: schema,
//     onSubmit: (values, action) => {
//       console.log(values);
//       action.resetForm();
//   },
// });
//     console.log(
//       "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//       errors
//  )
// ;



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

      <Formik
      initialValues={{
        name: " ",
        mobile: " ",
        location: " ",
        farmName: " ",
        farmSize: " ",
        previousCrop: " ",
        date: " ",
        sampleCode: " ",
        sampleType: " ",
        ph: " ",
        ec: " ",
        oc: " ",
        microbes: " ",
        nitrogen: " ",
        phosphorus: " ",
        potassium: " ",
        sulphur: " ",
        iron:" ",
        copper: " ",
        zinc: " ",
        boron:  " ",
        managanese: " "
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
        {/* <form onSubmit={handleSubmit}> */}
          <h3>Personal Details</h3>

          <Form className="form__details" >
            <Row className="mb-3">
              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="name">Farmer's Name</Form.Label>
                <Form.Control required 
                 type="text"
                 name="name"
                 id="name"
                 placeholder="Rahul Nagpal" />
              </Form.Group>

              {/* <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="mobile">Mobile No.</Form.Label>
                <Form.Control  name="mobile" id="mobile" value={values.mobile}
                onChange={handleChange}
                required type="number" placeholder="99X-XXX-XXXX" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="location">Location</Form.Label>
                <Form.Control name="location" id="location" 
                onChange={handleChange} value={values.location} required type="text" placeholder="Nuh" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="farmName">Farm's Name</Form.Label>
                <Form.Control name="farmName" id="farmName" value={values.farmName}
                 onChange={handleChange} required type="" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="farmSize">Farm's Size</Form.Label>
                <Form.Control
                  name="farmSize"
                  id="farmSize"
                  value={values.farmSize}
                  required
                  onChange={handleChange}
                  type=""
                  placeholder=""
                />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="previousCrop">Previous Crop</Form.Label>
                <Form.Control 
                name="previousCrop"
                id="previousCrop"
                value={values.previousCrop}
                onChange={handleChange}
                required type="text" placeholder="Rice" />
              </Form.Group>
            </Row> */}
            {/* </Form> */}
        

          <h3>Sample Details</h3>

          {/* <Form className="form__details"> */}
            {/* <Row className="mb-3">
              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="date">Date Of Collection</Form.Label>
                <Form.Control name="date" id="date"  value={values.date} required onChange={handleChange} type="date"></Form.Control>
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="sampleCode">Sample Code</Form.Label> 
                <Form.Control name="sampleCode" id="sampleCode" onChange={handleChange}  value={values.sampleCode} required type="" placeholder="rice009" />
              </Form.Group>

              <Form.Group as={Col} md="4" className="group">
                <Form.Label htmlFor="sampleType">Sample Type</Form.Label>
                <Form.Control required name="sampleType" id="sampleType" onChange={handleChange}  value={values.sampleType} type="text" placeholder="Clay" />
              </Form.Group>
            </Row> */}
            {/* </Form>
           */}

          <h3>Soil Testing Result</h3>
          {/* <Form className="form__details"> */}
            <Row className="mb-3">
              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="ph">pH</Form.Label>
                <Form.Control name="ph" id="ph"  required type="number"  placeholder="9" />
              </Form.Group>
              </Row>

              {/* <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="ec">
                  EC<span className="span__text">ds/m</span>
                </Form.Label>
                <Form.Control name="ec" id="ec"  value={values.ec} required type="number" onChange={handleChange} placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="oc">
                  OC<span className="span__text">g/kg</span>
                </Form.Label>
                <Form.Control name="oc" id="oc"  value={values.oc} required type="number" onChange={handleChange} placeholder="9" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="microbes">Microbes</Form.Label>
                <Form.Control name="microbes" id="microbes" required type="number" onChange={handleChange}  value={values.microbes} placeholder="493.09" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="nitrogen">
                  Nitrogen<span className="span__text">kg/acre</span>
                </Form.Label>
                <Form.Control name="nitrogen" onChange={handleChange} id="nitrogen" required  value={values.nitrogen} type="number" placeholder="9" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="phosphorus">
                  Phosphorus<span className="span__text">kg/acre</span>
                </Form.Label>
                <Form.Control name="phosphorus" onChange={handleChange} id="phosphorus" required type="number"  value={values.phosphorus} placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="potassium">
                  Potassium<span className="span__text">kg/acre</span>
                </Form.Label>
                <Form.Control name="potassium" onChange={handleChange} id="potassium" required type="number"  value={values.potassium} placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="sulphur">
                  Sulphur<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control name="sulphur" id="sulphur" required type="number" onChange={handleChange}  value={values.number} placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="iron">
                  Iron<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control required name="iron"  value={values.iron} id="iron" onChange={handleChange} type="number" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="3" className="group">
                <Form.Label htmlFor="copper">
                  Copper<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control required name="copper" id="copper"onChange={handleChange} type="number"  value={values.copper} placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="2" className="group">
                <Form.Label htmlFor="zinc">
                  Zinc<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control required name="zinc"  value={values.zinc} id="zinc" onChange={handleChange}  type="number" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} md="2" className="group">
                <Form.Label htmlFor="boron">
                  Boron<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control required name="boron"  value={values.boron} onChange={handleChange} id="boron" type="number" placeholder="" />
              </Form.Group> */}

              {/* <Form.Group as={Col} md="2" className="group">
                <Form.Label htmlFor="manganese">
                  Manganese<span className="span__text">mg/kg</span>
                </Form.Label>
                <Form.Control required name="manganese" id="manganese" onChange={handleChange}  value={values.manganese} type="number" placeholder="" />
              </Form.Group> */}
            </Row>

            <FloatingLabel
              className="area"
              controlId="floatingTextarea2"
              label="Leave a Remark here"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a Remark here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>

            <div className="form__button">
            <Button variant="success" className="btn">Submit</Button>{' '}
            </div>

            
          </Form>

          </Formik>
        {/* </form> */}
      </div>
    </div>

  );
}

export default FormReport;
