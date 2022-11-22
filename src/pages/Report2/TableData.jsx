import * as React from 'react';
import logo from "../../images/logo.png"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BarChart from './BarChart';
import "./table.css"

import FormRe from '../Form/FormRe';

function createTable(Parameter, Results, Range) {
   return { Parameter, Results, Range }; 
}


  const rows = [
        createTable("pH", FormRe.pH,  "6.5 - 7.5" ),
        createTable("EC(ds/m)", 7.6, "1-3" ),
        createTable("OC(g/kg)", 4, "5-7.6" ),
        createTable("Nitrogen(kg/ha)", 70.3, "280-560" ),
        createTable("Phosphorus(kg/ha)", 99.3, "28-56" ),
        createTable("Potassium(kg/ha)", 257.2, "140-280" ),
        createTable("Sulphur(mg/kg)", 106.9, "10-20" ),
        createTable("Iron(mg/kg)", 1.3, "4.5-9.5" ),
        createTable("coppermg/kg)", 0.1, "0.2-1" ),
        createTable("Zinc", 4.43, "0.6-1.5" ),
        createTable("Boron", 1.95, "0.1-0.5" ),
        createTable("Manganese", 6.53, "2-4" ),
    ]



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

    <div className="tableData">
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableName"><p>Parameters</p></TableCell>
            <TableCell className="tableName" align="right"><p>Results</p></TableCell>
            <TableCell className="tableName" align="right"><p>Range</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Parameter}
            >
              <TableCell component="th" scope="row" className='rowData'>
                <p>{row.Parameter}</p>
              </TableCell>
              <TableCell align="right" className='rowData'><p>{row.Results}</p></TableCell>
              <TableCell align="right" className='rowData'><p>{row.Range}</p></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <BarChart className="barchart"/>
  </div>
    </>
    
  );
}
