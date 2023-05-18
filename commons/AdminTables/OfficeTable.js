import React, { useEffect, useState } from "react";
import axios from "axios";
import { Popconfirm, message } from "antd";
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

const OfficeTable = ({ offices }) => {
  // States
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [editOfficeModal, setEditOfficeModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState({});
  const [allOffices, setAllOffices] = useState(offices);
  const [countries, setCountries] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Handlers
  const toggleAddOfficeModal = () => {
    setAddOfficeModal(!addOfficeModal);
    setRefresh(!refresh);
  };

  const togglEditOfficeModal = (office) => {
    setSelectedOffice(office);
    setEditOfficeModal(!editOfficeModal);
    setRefresh(!refresh);
  };

  const handleClose = () => {
    setSelectedOffice({});
    setEditOfficeModal(false);
    setAddOfficeModal(false);
    setRefresh(!refresh);
  };

  const handleDeleteOffice = (office) => {
    axios
      .delete(`/offices/${office.id}`, {
        withCredentials: true,
      })
      .then(() => {
        message.success("Oficina borrada");
        setRefresh(!refresh);
      });
  };

  const alertConfirm = (office) => {
    handleDeleteOffice(office);
  };
  const alertCancel = () => {
    message.info("Acción cancelada");
  };

  // useEffecs

  useEffect(() => {
    axios
      .get("/offices", {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((offices) => setAllOffices(offices));
  }, [refresh]);

  useEffect(() => {
    axios
      .get("/countries", {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((countries) => setCountries(countries));
  }, []);

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
              countries={countries}
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
                {allOffices?.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.country.name}</TableCell>
                    <TableCell
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
                        aria-label="edit"
                        onClick={() => togglEditOfficeModal(row)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Popconfirm
                          title="Eliminar Oficina"
                          description={`¿Está seguro de eliminar la Oficina: ${row.name}?`}
                          onConfirm={() => alertConfirm(row)}
                          onCancel={alertCancel}
                          okText="Sí"
                          cancelText="No"
                        >
                          <Delete />
                        </Popconfirm>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <EditOfficeModal
            open={editOfficeModal}
            onClose={handleClose}
            office={selectedOffice}
            countries={countries}
          />
        </div>
      </Grid>
    </div>
  );
};

export default OfficeTable;
