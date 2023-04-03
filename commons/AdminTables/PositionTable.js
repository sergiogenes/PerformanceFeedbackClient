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
import AddPositionModal from "../AdminModals/AddPositionModal";
import EditPositionModal from "../AdminModals/EditPositionModal";

const PositionTable = () => {
  // States
  const [selectedPosition, setSelectedPosition] = useState({});
  const [positionModal, setPositionModal] = useState(false);
  const [editPositionModal, setEditPositionModal] = useState(false);
  const [positions, setPositions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // Togglers
  const togglePositionModal = () => {
    setPositionModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  const toggleEditPositionModal = (position) => {
    setSelectedPosition(position);
    setEditPositionModal((prevState) => !prevState);
  };
  // Handlers
  const handleClose = () => {
    setSelectedPosition({});
    setEditPositionModal(false);
  };
  const handleDeletePositions = (position) => {
    axios
      .delete(`http://localhost:3001/positions/${position.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        message.success(response.data);
        setRefresh(!refresh);
      })
      .catch((error) => message.error(error.message));
  };
  // Effects
  useEffect(() => {
    axios
      .get("http://localhost:3001/positions", { withCredentials: true })
      .then((response) => setPositions(response.data))
      .catch((error) => console.log(error));
  }, [refresh]);

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
            <Typography variant="h6">PUESTOS</Typography>
            <Button onClick={togglePositionModal}>
              Agregar Puesto
              <Add />
            </Button>
            <AddPositionModal
              open={positionModal}
              onClose={togglePositionModal}
            />
          </Container>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>PUESTO</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {positions.map((pos) => (
                  <TableRow key={pos.name}>
                    <TableCell component="th" scope="pos">
                      {pos.id}
                    </TableCell>
                    <TableCell>{pos.name}</TableCell>
                    <TableCell style={{ display: "flex" }}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => toggleEditPositionModal(pos)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeletePositions(pos)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <EditPositionModal
            open={editPositionModal}
            onClose={handleClose}
            position={selectedPosition}
          />
        </div>
      </Grid>
    </div>
  );
};

export default PositionTable;
