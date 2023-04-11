import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import TeamCard from "./TeamCard";
import AddTeamModal from "../../commons/AdminModals/AddTeamModal";

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
      .get("http://localhost:3001/teams", { withCredentials: true })
      .then((res) => setAllTeams(res.data))
      .catch((err) => customMessage("error", err.data));
  }, [refresh]);

  return (
    <div style={{ flexGrow: 1, margin: "0.5rem" }}>
      <Button variant="outlined" onClick={toggleModal}>
        Agregar Equipo
        <Add />
      </Button>
      <AddTeamModal open={openModal} onClose={handleClose} />
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
