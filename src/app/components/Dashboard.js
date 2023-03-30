"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
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
import {
  Person,
  People,
  BarChart,
  Edit,
  Delete,
  Add,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import UserModal from "../commons/AdminModals/UserModal";
import OfficeModal from "../commons/AdminModals/OfficeModal";
import PositionModal from "../commons/AdminModals/PositionModal";
import { message } from "antd";

const userPerformanceData = [
  { name: "Task 1", progress: "20%" },
  { name: "Task 2", progress: "40%" },
  { name: "Task 3", progress: "60%" },
  { name: "Task 4", progress: "80%" },
  { name: "Task 5", progress: "100%" },
];

const teamData = [
  { name: "John Doe", position: "Manager", email: "johndoe@example.com" },
  { name: "Jane Smith", position: "Developer", email: "janesmith@example.com" },
  {
    name: "Bob Johnson",
    position: "Designer",
    email: "bobjohnson@example.com",
  },
];

/* const getPositions = async () => {
  try {
    const response = await axios.get("http://localhost:3001/positions", {
      withCredentials: true,
    });
    const positions = response.data;
    return positions;
  } catch (error) {
    console.log(error);
  }
};

const positionsData = getPositions(); 
console.log(positionsData);*/

const Dashboard = () => {
  // States
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [officeModalOpen, setOfficeModalOpen] = useState(false);
  const [positionModalOpen, setPositionModalOpen] = useState(false);
  const [positions, setPositions] = useState([]);

  // Handlers
  const handleUserModalOpen = () => {
    setUserModalOpen(true);
  };
  const handleUserModalClose = () => {
    setUserModalOpen(false);
  };
  const handleOfficeModalOpen = () => {
    setOfficeModalOpen(true);
  };
  const handleOfficeModalClose = () => {
    setOfficeModalOpen(false);
  };
  const handlePositionModalOpen = () => {
    setPositionModalOpen(true);
  };
  const handlePositionModalClose = () => {
    setPositionModalOpen(false);
  };
  const handleDeletePositions = (position) => {
    console.log("position", position);
    axios
      .delete(`http://localhost:3001/positions/${position.id}`, {
        withCredentials: true,
      })
      .then((response) => message.success(response.data))
      .catch((error) => message.error(error.message));
  };

  // Redux
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:3001/positions", { withCredentials: true })
      .then((response) => setPositions(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {user ? (
        <div
          style={{
            flexGrow: 1,
            padding: "2rem",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <div style={{ marginBottom: "2rem" }}>
                <Typography variant="h6">
                  {user.isAdmin ? "USUARIO ADMIN" : "USUARIO COMUN"}
                </Typography>
                <Person />
                <Typography>{user.firstName}</Typography>
                <Typography>{user.lastName}</Typography>
                <Typography>{user.email}</Typography>
                <Typography>{user.fileNumber}</Typography>
                <Typography>{user.shift}</Typography>
                <Typography>Admin: {user.isAdmin.toString()}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ marginBottom: "2rem" }}>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">USUARIOS</Typography>
                  <Button onClick={handleUserModalOpen}>
                    Agregar Usuario
                    <Add />
                  </Button>
                  <UserModal
                    open={userModalOpen}
                    onClose={handleUserModalClose}
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
                <People />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ marginBottom: "2rem" }}>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">Puestos</Typography>
                  <Button onClick={handlePositionModalOpen}>
                    Agregar Puesto
                    <Add />
                  </Button>
                  <PositionModal
                    open={positionModalOpen}
                    onClose={handlePositionModalClose}
                  />
                </Container>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>PUESTO</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {positions.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell style={{ display: "flex" }}>
                            <IconButton aria-label="edit">
                              <Edit />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleDeletePositions(row)}
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <People />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ marginBottom: "2rem" }}>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">OFICINAS</Typography>
                  <Button onClick={handleOfficeModalOpen}>
                    Agregar Oficina
                    <Add />
                  </Button>
                  <OfficeModal
                    open={officeModalOpen}
                    onClose={handleOfficeModalClose}
                  />
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
                <People />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ marginBottom: "2rem" }}>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">EQUIPOS</Typography>
                  <Button>
                    Agregar Equipo
                    <Add />
                  </Button>
                </Container>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>EQUIPO</TableCell>
                        <TableCell>LIDER</TableCell>
                        <TableCell>Email</TableCell>
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
                <People />
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ marginBottom: "2rem" }}>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">CATEGORIAS</Typography>
                  <Button>
                    Agregar Categoría
                    <Add />
                  </Button>
                </Container>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>CATEGORIA</TableCell>
                        <TableCell>DENOMINACION</TableCell>
                        <TableCell>ACCIONES</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userPerformanceData.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell>{row.progress}</TableCell>
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
                <BarChart />
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <h1>NO ESTA LOGUEADO</h1>
      )}
    </>
  );
};

export default Dashboard;
