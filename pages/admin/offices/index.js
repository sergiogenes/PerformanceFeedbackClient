import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tag } from "antd";
import { Typography, Button, Container } from "@mui/material";
import IsAdmin from "../../../commons/IsAdmin";
import Table from "../../../commons/Table";
import { Add } from "@mui/icons-material";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import AddOfficeModal from "../../../commons/AdminModals/AddOfficeModal";
import EditOfficeModal from "../../../commons/AdminModals/EditOfficeModal";
import EditButton from "../../../commons/EditButton";
import DeleteButton from "../../../commons/DeleteButton";

const OfficesPage = () => {
  // States
  const [addOfficeModal, setAddOfficeModal] = useState(false);
  const [editOfficeModal, setEditOfficeModal] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState({});
  const [allOffices, setAllOffices] = useState([]);
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
        customMessage("success", "Oficina eliminada");
        setRefresh(!refresh);
      });
  };
  const alertConfirm = (office) => {
    handleDeleteOffice(office);
  };
  const alertCancel = () => {
    customMessage("info", "Acción Cancelada");
  };
  // Effects
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
  // Headers
  const headers = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
      headerClassName: "theme--header",
      headerAlign: "flex",
      sx: { paddingLeft: "5px" },
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "country",
      headerName: "País",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value?.name || ""}`,
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <EditButton onClick={togglEditOfficeModal} row={index.row} />
          <DeleteButton
            onConfirm={alertConfirm}
            row={index.row}
            onCancel={alertCancel}
          />
        </>
      ),
    },
  ];

  return (
    <IsAdmin>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <Tag
          style={{
            borderRadius: 25,
            marginTop: "0.5rem",
            color: "#565659",
            backgroundColor: "#FFEDAB",
            borderColor: "#FFEDAB",
            maxHeight: "34px",
          }}
        >
          <Typography variant="h6">Oficinas</Typography>
        </Tag>
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
      <Table columns={headers} rows={allOffices} pageSize={5} />
      <EditOfficeModal
        open={editOfficeModal}
        onClose={handleClose}
        office={selectedOffice}
        countries={countries}
      />
    </IsAdmin>
  );
};

/* export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3001/offices", {
    withCredentials: true,
  });
  const offices = response.data;
  console.log("offices", offices);
  return {
    props: {
      offices,
    },
  };
} */

export default OfficesPage;
