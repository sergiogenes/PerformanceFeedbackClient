import React, { useEffect, useState } from "react";
import axios from "axios";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Grid, Typography, Button, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddUserModal from "../../../commons/AdminModals/AddUserModal";
import EditUserModal from "../../../commons/AdminModals/EditUserModal";
import Table from "../../../commons/Table";
import IsAdmin from "../../../commons/IsAdmin";
import EditButton from "../../../commons/EditButton";
import DeleteButton from "../../../commons/DeleteButton";

const users = () => {
  // States
  const [selectedUser, setSelectedUser] = useState({});
  const [userModal, setUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [activePositions, setActivePositions] = useState([]);
  const [activeTeams, setActiveTeams] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeOffices, setActiveOffices] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // Togglers
  const toggleUserModal = () => {
    setUserModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  const toggleEditUserModal = (user) => {
    setSelectedUser(user);
    setEditUserModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  // Handlers
  const alertConfirm = (user) => {
    handleDeleteUser(user);
  };
  const alertCancel = () => {
    customMessage("info", "Acción Cancelada");
  };
  const handleClose = () => {
    setSelectedUser({});
    setEditUserModal(false);
    setRefresh(!refresh);
  };
  const handleDeleteUser = (user) => {
    axios
      .put(
        `http://localhost:3001/users/deactivate/${user.id}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        customMessage("success", "Usuario desactivado");
        setRefresh(!refresh);
      });
  };

  // Effects
  useEffect(() => {
    axios
      .get("http://localhost:3001/users", { withCredentials: true })
      .then((response) => {
        setActiveUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, [refresh]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/positions", { withCredentials: true })
      .then((response) => setActivePositions(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/teams", { withCredentials: true })
      .then((res) => setActiveTeams(res.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/categories", { withCredentials: true })
      .then((res) => setActiveCategories(res.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/offices", { withCredentials: true })
      .then((res) => setActiveOffices(res.data))
      .catch((error) => console.log(error));
  }, []);

  // headers
  const headers = [
    {
      field: "firstName",
      headerName: "Nombre",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "lastName",
      headerName: "Apellido",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "fileNumber",
      headerName: "Legajo",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "position",
      headerName: "Puesto",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
    {
      field: "category",
      headerName: "Categoría",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
    {
      field: "office",
      headerName: "Oficina",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
    {
      field: "team",
      headerName: "Equipo",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
    {
      field: "leader",
      headerName: "Jefe Inmediato",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) =>
        `${params.value?.firstName || ""} ${params.value?.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <EditButton onClick={toggleEditUserModal} row={index.row} />
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
              <Typography variant="h6">USUARIOS</Typography>
              <Button onClick={toggleUserModal}>
                Agregar Usuario
                <Add />
              </Button>
              <AddUserModal
                open={userModal}
                onClose={toggleUserModal}
                positions={activePositions}
                teams={activeTeams}
                categories={activeCategories}
                offices={activeOffices}
              />
            </Container>
            <Table columns={headers} rows={activeUsers} pageSize={5} />
            <EditUserModal
              open={editUserModal}
              onClose={handleClose}
              user={selectedUser}
              positions={activePositions}
            />
          </div>
        </Grid>
      </div>
    </IsAdmin>
  );
};

export default users;
