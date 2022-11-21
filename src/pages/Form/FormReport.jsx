import React from "react";
import logo from "../../images/logo.png";
import "./form.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge, Button, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import { Formik, useFormik, ErrorMessage } from "formik";
import { schema } from "./schema";

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
            // mobile: " ",
            // location: " ",
            // farmName: " ",
            // farmSize: " ",
            // previousCrop: " ",
            // date: " ",
            // sampleCode: " ",
            // sampleType: " ",
            // ph: " ",
            // ec: " ",
            // oc: " ",
            // microbes: " ",
            // nitrogen: " ",
            // phosphorus: " ",
            // potassium: " ",
            // sulphur: " ",
            // iron: " ",
            // copper: " ",
            // zinc: " ",
            // boron: " ",
            // managanese: " ",
          }}
          validate = {(values) => {
            const errors = {};

            if(!values.fname) {
              return errors;
            }
          }}
          onSubmit={(values,  { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({ values, handleSubmit, touched, handleChange, setSubmitting, errors}) => (
            <Form className="form__details" onSubmit={handleSubmit}>
              <h3>Personal Details</h3>

              {/* <Row className="mb-3"> */}

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="name">Farmer's Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={handleChange}
                    id="name"
                    value={values.name}
                    placeholder="Rahul Nagpal"
                  />
                  <ErrorMessage name="email" component="div" />
                </Form.Group>

                {/* <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="mobile">Mobile No.</Form.Label>
                  <Form.Control
                    name="mobile"
                    id="mobile"
                    required
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="99X-XXX-XXXX"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="location">Location</Form.Label>
                  <Form.Control
                    name="location"
                    id="location"
                    required
                    type="text"
                    placeholder="Nuh"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="farmName">Farm's Name</Form.Label>
                  <Form.Control
                    name="farmName"
                    id="farmName"
                    required
                    type=""
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="farmSize">Farm's Size</Form.Label>
                  <Form.Control
                    name="farmSize"
                    id="farmSize"
                    required
                    type=""
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="previousCrop">Previous Crop</Form.Label>
                  <Form.Control
                    name="previousCrop"
                    id="previousCrop"
                    required
                    type="text"
                    placeholder="Rice"
                  />
                </Form.Group>
              </Row> */}

              {/* <h3>Sample Details</h3>

              <Row className="mb-3">
                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="date">Date Of Collection</Form.Label>
                  <Form.Control
                    name="date"
                    id="date"
                    required
                    type="date"
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="sampleCode">Sample Code</Form.Label>
                  <Form.Control
                    name="sampleCode"
                    id="sampleCode"
                    required
                    type=""
                    placeholder="rice009"
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="sampleType">Sample Type</Form.Label>
                  <Form.Control
                    required
                    name="sampleType"
                    id="sampleType"
                    type="text"
                    placeholder="Clay"
                  />
                </Form.Group>
              </Row>

              <h3>Soil Testing Result</h3>

              <Row className="mb-3">
                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="ph">pH</Form.Label>
                  <Form.Control
                    name="ph"
                    id="ph"
                    required
                    type="number"
                    placeholder="9"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="ec">
                    EC<span className="span__text">ds/m</span>
                  </Form.Label>
                  <Form.Control
                    name="ec"
                    id="ec"
                    required
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="oc">
                    OC<span className="span__text">g/kg</span>
                  </Form.Label>
                  <Form.Control
                    name="oc"
                    id="oc"
                    required
                    type="number"
                    placeholder="9"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="microbes">Microbes</Form.Label>
                  <Form.Control
                    name="microbes"
                    id="microbes"
                    required
                    type="number"
                    placeholder="493.09"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="nitrogen">
                    Nitrogen<span className="span__text">kg/acre</span>
                  </Form.Label>
                  <Form.Control
                    name="nitrogen"
                    id="nitrogen"
                    required
                    v
                    type="number"
                    placeholder="9"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="phosphorus">
                    Phosphorus<span className="span__text">kg/acre</span>
                  </Form.Label>
                  <Form.Control
                    name="phosphorus"
                    id="phosphorus"
                    required
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="potassium">
                    Potassium<span className="span__text">kg/acre</span>
                  </Form.Label>
                  <Form.Control
                    name="potassium"
                    id="potassium"
                    required
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="sulphur">
                    Sulphur<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    name="sulphur"
                    id="sulphur"
                    required
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="iron">
                    Iron<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="iron"
                    id="iron"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="copper">
                    Copper<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="copper"
                    id="copper"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="zinc">
                    Zinc<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="zinc"
                    id="zinc"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="boron">
                    Boron<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="boron"
                    id="boron"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="manganese">
                    Manganese<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="manganese"
                    id="manganese"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="Boron">
                    Boron<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Boron"
                    id="Boron"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="">
                    Aluminum<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Aluminume"
                    id="Aluminum"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="Chlorine">
                    Chlorine<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Chlorine"
                    id="Chlorine"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="Molybdenum">
                    Molybdenum<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Molybdenum"
                    id="Molybdenum"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="Nickle">
                    Nickle<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="Nickle"
                    id="Nickle"
                    type="number"
                    placeholder=""
                  />
                </Form.Group>
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

              */}

              <div className="form__button">
                <Button variant="success" className="btn">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormReport;
