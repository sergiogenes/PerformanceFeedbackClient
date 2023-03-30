import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Avatar,
  Grid,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import Input from "../Input/Input";
import { message } from "antd";

const UserModal = ({ open, onClose }) => {
  const userFormData = {
    firstName: "",
    lastName: "",
    email: "",
    fileNumber: "",
    position: "",
    shift: "",
  };
  // States
  const [formData, setFormData] = useState(userFormData);
  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user", formData, { withCredentials: true })
      .then((newUser) => console.log(newUser))
      .catch((err) => message.error("Malio Sal"));
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            borderRadius: "25px",
          }}
          elevation={3}
        >
          <Avatar
            style={{
              margin: "1rem",
              backgroundColor: "#FB9B14",
            }}
          >
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h5">Nuevo Usuario:</Typography>
          <form
            style={{ width: "100%", marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Input
                name="firstName"
                label="Nombre"
                handleChange={handleChange}
                type="text"
                half
              />
              <Input
                name="lastName"
                label="Apellido"
                handleChange={handleChange}
                type="text"
                half
              />
              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="fileNumber"
                label="Legajo"
                handleChange={handleChange}
                type="text"
              />
              <Input
                name="position"
                label="Puesto"
                handleChange={handleChange}
                type="text"
                half
              />
              <Input
                name="shift"
                label="Turno"
                handleChange={handleChange}
                type="text"
                half
              />
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                onClick={onClose}
                sx={{
                  mr: 1,
                  backgroundColor: "#1369B4",
                  "&:hover": {
                    backgroundColor: "#FB9B14",
                  },
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{
                  mr: 1,
                  backgroundColor: "#1369B4",
                  "&:hover": {
                    backgroundColor: "#FB9B14",
                  },
                }}
                type="submit"
              >
                Crear
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Modal>
  );
};

export default UserModal;
