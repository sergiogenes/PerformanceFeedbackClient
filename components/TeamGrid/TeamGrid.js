import React, { useState } from "react";
import { Table } from "antd";
import { Grid } from "@mui/material";
import TeamCard from "./TeamCard";

const { Column } = Table;
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
  const [refresh, setRefresh] = useState(false);
  // Handlers
  const handleClose = () => {
    setOpenCard(false);
  };
  const toggleCard = () => {
    setOpenCard((prevState) => !prevState);
    setRefresh(!refresh);
  };

  return (
    <div style={{ flexGrow: 1, margin: "1rem" }}>
      <Grid container spacing={4}>
        {data.map((card) => (
          <TeamCard
            onClick={toggleCard}
            key={card.key}
            team={card}
            open={openCard}
            onClose={handleClose}
          />
        ))}
      </Grid>
    </div>
  );
};

export default TeamGrid;
