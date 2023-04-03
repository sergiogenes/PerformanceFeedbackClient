import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import OfficeModal from "../AdminModals/OfficeModal";

const teamData = [
  { name: "John Doe", position: "Manager", email: "johndoe@example.com" },
  { name: "Jane Smith", position: "Developer", email: "janesmith@example.com" },
  {
    name: "Bob Johnson",
    position: "Designer",
    email: "bobjohnson@example.com",
  },
];

const OfficeTable = () => {
  // States
  const [officeModal, setOfficeModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  // Handlers
  const toggleOfficeModal = () => {
    setOfficeModal((prevState) => !prevState);
  };

  return (
    <div
      style={{
        flexGrow: 1,
        padding: "2rem",
      }}
    >
      <Grid item xs={12} sm={6} md={6}>
        <div style={{ marginBottom: "2rem" }}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">OFICINAS</Typography>
            <Button onClick={toggleOfficeModal}>
              Agregar Oficina
              <Add />
            </Button>
            <OfficeModal open={officeModal} onClose={toggleOfficeModal} />
          </Container>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>OFICINA</TableCell>
                  <TableCell>DENOMINACION</TableCell>
                  <TableCell>PAIS</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.position}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell style={{ display: "flex" }}>
                      <IconButton aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </div>
  );
};

export default OfficeTable;
