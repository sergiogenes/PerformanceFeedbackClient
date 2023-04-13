import React, { useEffect, useState } from "react";
import axios from "axios";
import IsAdmin from "../../../commons/IsAdmin";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Typography, Button, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddPositionModal from "../../../commons/AdminModals/AddPositionModal";
import EditPositionModal from "../../../commons/AdminModals/EditPositionModal";
import Table from "../../../commons/Table";
import EditButton from "../../../commons/EditButton";
import DeleteButton from "../../../commons/DeleteButton";

const PositionsPage = () => {
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
    setRefresh(!refresh);
  };
  // Handlers
  const alertConfirm = (cat) => {
    handleDeletePositions(cat);
  };
  const alertCancel = () => {
    customMessage("info", "Acción Cancelada");
  };
  const handleClose = () => {
    setSelectedPosition({});
    setEditPositionModal(false);
    setRefresh(!refresh);
  };
  const handleDeletePositions = (position) => {
    axios
      .delete(`http://localhost:3001/positions/${position.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        customMessage("success", res.data);
        setRefresh(!refresh);
      })
      .catch((err) => customMessage("error", err.data));
  };
  // Effects
  useEffect(() => {
    axios
      .get("http://localhost:3001/positions", { withCredentials: true })
      .then((res) => setPositions(res.data))
      .catch((err) => customMessage("error", err.data));
  }, [refresh]);

  // headers
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
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <EditButton onClick={toggleEditPositionModal} row={index.row} />
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
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">PUESTOS</Typography>
        <Button onClick={togglePositionModal}>
          Agregar Puesto
          <Add />
        </Button>
        <AddPositionModal open={positionModal} onClose={togglePositionModal} />
      </Container>
      <Table columns={headers} rows={positions} pageSize={5} />
      <EditPositionModal
        open={editPositionModal}
        onClose={handleClose}
        position={selectedPosition}
      />
    </IsAdmin>
  );
};

export default PositionsPage;
