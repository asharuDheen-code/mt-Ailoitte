import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, date, fat, carbs, protein) {
  return { name, date, fat, carbs, protein };
}

const rows = [
  createData("Task 001", "11/01/2022"),
  createData("Task 002", "11/02/2022"),
  createData("Task 003", "11/05/2022"),
  createData("Task 004", "11/08/2022"),
  createData("Task 005", "11/09/2022"),
  createData("Task 006", "11/09/2022"),
  createData("Task 007", "11/14/2022"),
  createData("Task 008", "11/17/2022"),
  createData("Task 009", "11/18/2022"),
  createData("Task 010", "11/20/2022"),
];

export default function BasicTable({ newDate }) {
  console.log("newDate", newDate);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tasks</TableCell>
            <TableCell align="right">Submit date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newDate ?
            rows
              .filter((item) => item.date === newDate)
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              )) : rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              )) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
