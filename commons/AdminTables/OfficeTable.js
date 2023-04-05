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
import AddOfficeModal from "../AdminModals/AddOfficeModal";
import EditOfficeModal from "../AdminModals/EditOfficeModal";
import Link from "next/link";

const fakeOffices = [
  { id: 1, name: "Amenabar", country: { id: 1, name: "Argentina", ISO: "AR" } },
  { id: 2, name: "Elia", country: { id: 1, name: "Argentina", ISO: "AR" } },
  {
    id: 3,
    name: "Maimi",
    country: { id: 2, name: "Estados Unidos", ISO: "US" },
  },
  { id: 4, name: "Santiago", country: { id: 3, name: "Chile", ISO: "CL" } },
];

const OfficeTable = ({ offices = fakeOffices }) => {
  // States
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [editOfficeModal, setEditOfficeModal] = useState(false);
  const [selectOffice, setSelectOffice] = useState({});
  const [refresh, setRefresh] = useState(false);

  // Handlers
  const toggleAddOfficeModal = () => {
    setAddOfficeModal(!addOfficeModal);
  };

  const togglEditOfficeModal = (office) => {
    setSelectOffice(office);
    setEditOfficeModal(!editOfficeModal);
  };

  const handleClose = () => {
    setSelectedOffice({});
    setEditOfficeModal(false);
    setAddOfficeModal(false);
  };

  return (
    <div
      style={{
        flexGrow: 1,
        padding: "2rem",
      }}
    >
      <Grid item xs={12} sm={9} md={12}>
        <div style={{ marginBottom: "2rem" }}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">OFICINAS</Typography>
            <Button onClick={toggleAddOfficeModal}>
              Agregar oficina
              <Add />
            </Button>
            <AddOfficeModal
              open={addOfficeModal}
              onClose={toggleAddOfficeModal}
            />
          </Container>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>OFICINA</TableCell>
                  <TableCell>DENOMINACION</TableCell>
                  <TableCell>PAIS</TableCell>
                  <TableCell
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    ACCIONES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {offices.map((office) => (
                  <TableRow key={office.name}>
                    <TableCell component="th" scope="row">
                      {office.id}
                    </TableCell>
                    <TableCell>{office.name}</TableCell>
                    <TableCell>{office.country.name}</TableCell>
                    <TableCell
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
                        aria-label="edit"
                        onClick={() => togglEditOfficeModal(office)}
                        onClose={togglEditOfficeModal}
                      >
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
        <EditOfficeModal
          open={editOfficeModal}
          onClose={togglEditOfficeModal}
          office={selectOffice}
        />
      </Grid>
    </div>
  );
};

export default OfficeTable;

/* export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/offices/", {
    withCredentials: true,
  });
  const offices = response.data;
  return {
    props: {
      offices,
    },
  };
} */
