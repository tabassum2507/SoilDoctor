import * as React from "react";
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
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";

function createTable(Parameter, Results, Range) {
  return { Parameter, Results, Range };
}

const data = JSON.parse(localStorage.getItem("data"));
console.log(data);

const rows = [
  createTable("pH", data?.ph, "6.5 - 7.5"),
  createTable("EC(ds/m)", data?.ec, "1-3"),
  createTable("OC(g/kg)", data?.oc, "5-7.6"),
  createTable("Nitrogen(kg/ha)", data?.nitrogen, "280-560"),
  createTable("Phosphorus(kg/ha)", data?.phosphorus, "28-56"),
  createTable("Potassium(kg/ha)", data?.potassium, "140-280"),
  createTable("Sulphur(mg/kg)", data?.sulphur, "10-20"),
  createTable("Iron(mg/kg)", data?.iron, "4.5-9.5"),
  createTable("Copper(mg/kg)", data?.copper, "0.2-1"),
  createTable("Zinc", data?.zinc, "0.6-1.5"),
  createTable("Boron", data?.boron, "0.1-0.5"),
  createTable("Aluminum", data?.aluminum, "2-4"),
  createTable("Nickle", data?.nickle, "2-4"),
  createTable("Manganese", data?.manganese, "2-4"),
];

// const rows = [
//     createTable("pH", 7, 6.5-7.5 ),
//     createTable("EC", 7.6, 1-3 ),
//     createTable("OC", 4, 5-7.6 ),
//     createTable("Nitrogen", 70.3, 280-560 ),
//     createTable("Phosphorus", 99.3, 28-56 ),
//     createTable("Potassium", 257.2, 140-280 ),
//     createTable("Sulphur", 106.9, 10-20 ),
//     createTable("Iron", 1.3, 4.5-9.5 ),
//     createTable("copper", 0.1, 0.2-1 ),
//     createTable("Zinc", 4.43, 0.6-1.5 ),
//     createTable("Boron", 1.95, 0.1-0.5 ),
//     createTable("Manganese", 6.53, 2-4 ),
// ]

export default function TableData() {
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
            value="female"
            control={<Radio color="success" size="large" />}
            label="Simple Report"
          />
          </Link>
          
          <FormControlLabel
            className="text__form"
            value="male"
            control={<Radio color="success" size="large" />}
            label="Detailed Report"
          />
          <Link to="/both" >
          <FormControlLabel
            className="text__form"
            value="other"
            control={<Radio color="success" size="large" />}
            label="Both Reports"
          />
          </Link>
          
        </RadioGroup>
      </FormControl>

      <div className="tableData" style={{ position: "relative" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableName">
                  <p>Parameters</p>
                </TableCell>
                <TableCell  className="tableName" align="right">
                  <p>Results</p>
                </TableCell>
                <TableCell className="tableName" align="right">
                  <p>Range</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Parameter}>
                  <TableCell component="th" scope="row"  className="rowData">
                    <p >{row.Parameter}</p>
                  </TableCell>
                  <TableCell align="right" className="rowData" >
                    <p >{row.Results}</p>
                  </TableCell>
                  <TableCell align="right" className="rowData" >
                    <p >{row.Range}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <BarChart className="barchart" />
      </div>

   
      <div className="table_button">
      <button type="submit" >Download <HiChevronRight style={{ marginLeft : "20px"}}/></button>
      </div>
    </>
  );
}
