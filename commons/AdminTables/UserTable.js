import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Popconfirm } from "antd";
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
import AddUserModal from "../AdminModals/AddUserModal";
import EditUserModal from "../AdminModals/EditUserModal";

const UserTable = () => {
  // States
  const [selectedUser, setSelectedUser] = useState({});
  const [userModal, setUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [activePositions, setActivePositions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // Togglers
  const toggleUserModal = () => {
    setUserModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  const toggleEditUserModal = (user) => {
    setSelectedUser(user);
    setEditUserModal((prevState) => !prevState);
  };
  // Handlers
  const alertConfirm = (user) => {
    handleDeleteUser(user);
  };
  const alertCancel = () => {
    message.info("Acción cancelada");
  };
  const handleClose = () => {
    setSelectedUser({});
    setEditUserModal(false);
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
        message.success("Usuario desactivado");
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
            <Typography variant="h6">USUARIOS</Typography>
            <Button onClick={toggleUserModal}>
              Agregar Usuario
              <Add />
            </Button>
            <AddUserModal
              open={userModal}
              onClose={toggleUserModal}
              positions={activePositions}
            />
          </Container>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NOMBRE</TableCell>
                  <TableCell>PUESTO</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activeUsers.map((row) => (
                  <TableRow key={row.fileNumber}>
                    <TableCell component="th" scope="row">
                      {row.firstName?.toString()}
                    </TableCell>
                    <TableCell>{row.position?.name.toString()}</TableCell>
                    <TableCell>{row.email?.toString()}</TableCell>
                    <TableCell style={{ display: "flex" }}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => toggleEditUserModal(row)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Popconfirm
                          title="Desactivar Usuario"
                          description="Seguro que quiere desactivar este Usuario?"
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
          <EditUserModal
            open={editUserModal}
            onClose={handleClose}
            user={selectedUser}
            positions={activePositions}
          />
        </div>
      </Grid>
    </div>
  );
};

export default UserTable;
