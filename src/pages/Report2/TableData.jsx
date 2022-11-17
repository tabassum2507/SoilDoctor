import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BarChart from './BarChart';

function createTable(Parameter, Results, Range) {
   return { Parameter, Results, Range }; 
}

const rows = [ 
    createTable("pH", 7.36, 6.5-7.5 ),
    createTable("EC", 7.6, 1-3 ),
    createTable("OC", 4, 5-7.6 ),
    createTable("Nitrogen", 70.3, 280-560 ),
    createTable("Phosphorus", 99.3, 28-56 ),
    createTable("Potassium", 257.2, 140-280 ),
    createTable("Sulphur", 106.9, 10-20 ),
    createTable("Iron", 1.3, 4.5-9.5 ),
    createTable("copper", 0.1, 0.2-1 ),
    createTable("Zinc", 4.43, 0.6-1.5 ),
    createTable("Boron", 1.95, 0.1-0.5 ),
    createTable("Manganese", 6.53, 2-4 ),
]




export default function TableData() {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parameters</TableCell>
            <TableCell align="right">Results</TableCell>
            <TableCell align="right">Range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Parameter}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Parameter}
              </TableCell>
              <TableCell align="right">{row.Results}</TableCell>
              <TableCell align="right">{row.Range}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <BarChart/>
  </>
  );
}
