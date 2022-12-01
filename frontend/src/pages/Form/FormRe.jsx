import {React, useState } from "react";
import logo from "../../images/logo.png";
import "./form.css";
import Col from "react-bootstrap/Col";
import { Badge, Button, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage,  } from "formik";
import { HiChevronRight } from "react-icons/hi2";
  
function FormRe() {
  const navigate=useNavigate()

  // const url = " "
  // const [ data, setData] = useState({
  //   "name" : " ",
  //   "mobile" : " ",
  //   "location" : " ",
  //   "farmName": " ",
  //   "farmSize": " ",
  //   "previousCrop": " ",
  //   "date": " ",
  //   "sampleCode": " ",
  //   "sampleType": " ",
  //   "ph": " ",
  //   "ec": " ",
  //   "oc": " ",
  //    "microbes": " ",
  //    "nitrogen": " ",
  //    "phosphorus": " ",
  //    "potassium": " ",
  //    "sulphur": " ",
  //    "iron": " ",
  //    "copper": " ",
  //    "zinc": " ",
  //    "boron": " ",
  //    "nickle":  " ",
  //    "molybdenum": " ",
  //    "chlorine": " ",
  //    "aluminume": " ",
  //    "boron": " ",
  //    "manganese": " ",
  //    "area": " "

  // })


  // function handle(e) {
  //    var newdata = { ...data}
  //    newdata[e.target.id] = e.target.value 
  //    setData(newdata)
     
  // }
 
  // function submit(e) {
  //   e.preventDefault();
  //   console.log(data)
  // }

   



  return (
    <div className="form">
      {/* header */}
       <div className="form__header">
        <img
          className="form__header--logo"
          src={logo}
          style={{ marginRight: "10px" }}
        />
        <div className="form__header__name">
          Soil <span>Doctor</span>
        </div>
      </div> 

      {/* form body */}

      <div className="form__body">


      <Formik
          initialValues={{
           "name" : " ",
           "mobile" : " ",
           "location" : " ",
           "farmName": " ",
           "farmSize": " ",
           "previousCrop": " ",
           "date": " ",
           "sampleCode": " ",
           "sampleType": " ",
           "ph": " ",
           "ec": " ",
           "oc": " ",
            "microbes": " ",
            "nitrogen": " ",
            "phosphorus": " ",
            "potassium": " ",
            "calcium": " ",
            "sulphur": " ",
            "iron": " ",
            "copper": " ",
            "zinc": " ",
            "boron": " ",
            "nickle":  " ",
            "molybdenum": " ",
            "chlorine": " ",
            "aluminume": " ",
            "manganese": " ",
            "area": " "
          }}

          
          onSubmit={ (values) => {
            localStorage.setItem('data',JSON.stringify(values))
               navigate('/report')
          }} > 
            
            {({ isSubmitting, values, handleChange, handleSubmit }) => (
       
         
            <Form className="form__details" onSubmit={handleSubmit}>
              
               <h3>Personal Details</h3>

              <Row className="mb-3">

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
                </Form.Group>

                <Form.Group as={Col} md="4" className="group">
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
                  
                    value ={ values.location}
                    onChange={handleChange}
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
                    
                    value ={ values.farmName}
                    onChange={handleChange}
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
                   
                    value ={ values.farmSize}
                    onChange={handleChange}
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
                   
                    value ={ values.previousCrop}
                    onChange={handleChange}
                    placeholder="Rice"
                  />
                </Form.Group>


              </Row>
  

               <h3>Sample Details</h3>

               <Row className="mb-3"> 
                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="date">Date Of Collection</Form.Label>
                  <Form.Control
                    name="date"
                    id="date"
                    required
                    type="date"
                    
                    value ={ values.date}
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group> 

                <Form.Group as={Col} md="4" className="group">
                  <Form.Label htmlFor="sampleCode">Sample Code</Form.Label>
                  <Form.Control
                    name="sampleCode"
                    id="sampleCode"
                    required
                    type=""
                   
                    value ={ values.sampleCode}
                    onChange={handleChange}
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
                    
                    value ={ values.sampleType}
                    onChange={handleChange}
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
                    value ={ values.ph}
                    onChange={handleChange}
                    type="number"
                    placeholder="Range: 0-14"
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
                   
                    value ={ values.ec}
                    onChange={handleChange}
                    placeholder="Range: 0-3"
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
                   
                    value ={ values.oc}
                    onChange={handleChange}
                    placeholder="Range: 0-3"
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="microbes">Microbes</Form.Label>
                  <Form.Control
                    name="microbes"
                    id="microbes"
                    required
                    type="number"
                    
                    value ={ values.microbes}
                    onChange={handleChange}
                    placeholder="Range: 0-500"
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
                    
                    type="number"
                    
                    value ={ values.nitrogen}
                    onChange={handleChange}
                    placeholder="Range: 0-600"
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
                   
                    value ={ values.phosphorus}
                    onChange={handleChange}
                    type="number"
                    placeholder="Range: 0-30"
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
                    onChange={handleChange}
                    type="number"
                    value ={ values.potassium}
                    
                   
                    placeholder="Range: 0-300"
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
                    
                    value ={ values.sulphur}
                    onChange={handleChange}
                    placeholder="Range: 0-30"
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
                  
                    value ={ values.iron}
                    onChange={handleChange}
                    placeholder="Range: 0-15"
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
                    
                    value ={ values.copper}
                    onChange={handleChange}
                    placeholder="Range: 0-0.9"
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
                    
                    value ={ values.zinc}
                    onChange={handleChange}
                    placeholder="Range: 0-14"
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
                   
                    value ={ values.boron}
                    onChange={handleChange}
                    placeholder="Range: 0-3"
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
                   
                    value ={ values.manganese}
                    onChange={handleChange}
                    placeholder="Range: 0-14"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="calcium">
                    Calcium<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="calcium"
                    id="calcium"
                    type="number"
                   
                    value ={ values.calcium}
                    onChange={handleChange}
                    placeholder="Range: 0-14"
                  />
                </Form.Group>



                <Form.Group as={Col} md="3" className="group">
                  <Form.Label htmlFor="">
                    Aluminum<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="aluminum"
                    id="aluminum"
                    type="number"
                    
                    value ={ values.aluminum}
                    onChange={handleChange}
                    placeholder="Range: 0-5"
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="Chlorine">
                    Chlorine<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="chlorine"
                    id="chlorine"
                    type="number"
                    
                    value ={ values.chlorine}
                    onChange={handleChange}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="Molybdenum">
                    Molybdenum<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="molybdenum"
                    id="molybdenum"
                    type="number"
                    
                    value ={ values.molybdenum}
                    onChange={handleChange}
                    placeholder=""
                  />
                </Form.Group>

                <Form.Group as={Col} md="2" className="group">
                  <Form.Label htmlFor="Nickle">
                    Nickle<span className="span__text">mg/kg</span>
                  </Form.Label>
                  <Form.Control
                    required
                    name="nickle"
                    id="nickle"
                    type="number"
                   
                    value= {values.nickle}
                    onChange={handleChange}
                    placeholder=""
                  />
                </Form.Group>
              </Row>

              <FloatingLabel
                className="area"
                label="Leave a Remark here"
              >
                <Form.Control
                  as="textarea"
                  required
                  id="area"
                  onChange={handleChange}
                  value= {values.area}
                  placeholder="Leave a Remark here"
                  style={{ height: "200px" }}
                />
              </FloatingLabel> 

          

              
              <div className="table_button">
               <button type="submit" >Download <HiChevronRight style={{ marginLeft : "20px"}}/></button>
               </div>
            </Form>
         )}
         </Formik>

      </div>
    </div>
  );
}

export default FormRe;
