import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import TeamCard from "./TeamCard";
import AddTeamModal from "../../commons/AdminModals/AddTeamModal";

const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "Comercial",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "Desarrolladores",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Marketing",
    tags: ["cool", "teacher"],
  },
];

const TeamGrid = () => {
  // States
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
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/teams", { withCredentials: true })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => customMessage("error", err.data));
  // }, [refresh]);

  return (
    <div style={{ flexGrow: 1, margin: "0.5rem" }}>
      <Button variant="outlined" onClick={toggleModal}>
        Agregar Equipo
        <Add />
      </Button>
      <AddTeamModal open={openModal} onClose={handleClose} />
      <Grid container spacing={4} style={{ marginTop: "0.5rem" }}>
        {data.map((card) => (
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
