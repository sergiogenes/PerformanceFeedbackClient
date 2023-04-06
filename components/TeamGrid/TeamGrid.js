import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space, Table, Tag, Popconfirm } from "antd";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import TeamCard from "./TeamCard";

// const teamData = [
//   {
//     id: 1,
//     name: "Equipo 1",
//     description: "Gerencia",
//     boss: [{ id: 1, fullName: "Montgomery Burns" }],
//     manager: [{ id: 1, fullName: "Waylon Smithers" }],
//     workers: [
//       { id: 1, fullName: "Homero Simpson" },
//       { id: 2, fullName: "Lenny Leonards" },
//       { id: 3, fullName: "Carl Carlson" },
//     ],
//   },
//   // more items
// ];
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

  const handleClose = () => {
    setSelectedPosition({});
    setOpenCard(false);
  };
  const toggleCard = () => {
    setOpenCard((prevState) => !prevState);
    setRefresh(!refresh);
  };
  // Effects
  // useEffect(() => {
  //     axios
  //       .get("http://localhost:3001/offices", { withCredentials: true })
  //       .then((res) => setActiveOffices(res.data))
  //       .catch((err) => customMessage("error", err.message));
  //   }, [refresh]);

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

/**
 * return (
    <div style={{ flexGrow: 1, margin: "1rem" }}>
      <Grid container spacing={4}>
        {teamData.map((office) => (
          <Grid item key={office.id} xs={12} sm={12} md={6} lg={6}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent style={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {office.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {office.description}
                </Typography>
                <TableContainer component={Paper}>
                  <Container
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button>
                      Agregar Gerente
                      <Add />
                    </Button>
                  </Container>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NOMBRE</TableCell>
                        <TableCell>ACCIONES</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {office.manager.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id?.toString()}
                          </TableCell>
                          <TableCell>{row.fullName.toString()}</TableCell>
                          <TableCell>
                            <IconButton aria-label="delete">
                              <Popconfirm
                                title="Quitar del Equipo"
                                description="Seguro que quiere desactivar este Usuario?"
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
                <TableContainer component={Paper}>
                  <Container
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button>
                      Agregar Trabajador
                      <Add />
                    </Button>
                  </Container>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NOMBRE</TableCell>
                        <TableCell>ACCIONES</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {office.workers.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            {row.id?.toString()}
                          </TableCell>
                          <TableCell>{row.fullName.toString()}</TableCell>
                          <TableCell>
                            <IconButton aria-label="delete">
                              <Popconfirm
                                title="Quitar del Equipo"
                                description="Seguro que quiere desactivar este Usuario?"
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
 */
