import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button, Typography, Container } from "@mui/material";
import { Tag } from "antd";
import { Add } from "@mui/icons-material";
import TeamCard from "./TeamCard";
import AddTeamModal from "../../commons/AdminModals/AddTeamModal";
import { customMessage } from "../../commons/CustomMessage/CustomMessage";

const TeamGrid = () => {
  // States
  const [allTeams, setAllTeams] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  // Handlers
  const handleCloseCard = () => {
    setOpenCard(false);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  // Togglers
  const toggleCard = () => {
    setOpenCard((prevState) => !prevState);
    setRefresh(!refresh);
  };
  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  // Effects
  useEffect(() => {
    axios
      .get("/teams", { withCredentials: true })
      .then((res) => setAllTeams(res.data))
      .catch((err) => customMessage("error", err.response.data));
  }, [refresh, openModal]);

  return (
    <div style={{ flexGrow: 1, margin: "0.5rem" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tag
          style={{
            borderRadius: 25,
            marginTop: "0.5rem",
            color: "#565659",
            backgroundColor: "#FFD7CA",
            borderColor: "#FFD7CA",
            maxHeight: "34px",
          }}
        >
          <Typography variant="h6">Equipos</Typography>
        </Tag>
        <Button variant="outlined" onClick={toggleModal}>
          Agregar Equipo
          <Add />
        </Button>
        <AddTeamModal open={openModal} onClose={handleClose} />
      </Container>
      <Grid container spacing={4} style={{ marginTop: "0.5rem" }}>
        {allTeams.map((card) => (
          <TeamCard
            onClick={toggleCard}
            key={card.key}
            team={card}
            open={openCard}
            onClose={handleCloseCard}
          />
        ))}
      </Grid>
    </div>
  );
};

export default TeamGrid;
