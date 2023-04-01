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
import SaveAsIcon from "@mui/icons-material/SaveAs";
import axios from "axios";
import Input from "../Input/Input";
import { message } from "antd";

const EditUserModal = ({ user, open, onClose }) => {
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
      .put(`http://localhost:3001/users/${user.id}`, formData, {
        withCredentials: true,
      })
      .then((user) =>
        message.success(`Usuario (${user.data.fileNumber}) modificado`)
      )
      .catch((err) => message.error(err));
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
            <SaveAsIcon />
          </Avatar>
          <Typography variant="h5">Modificar Usuario:</Typography>
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
                defaultValue={formData.firstName}
              />
              <Input
                name="lastName"
                label="Apellido"
                handleChange={handleChange}
                type="text"
                half
                defaultValue={formData.lastName}
              />
              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                type="email"
                defaultValue={formData.email}
              />
              <Input
                name="fileNumber"
                label="Legajo"
                handleChange={handleChange}
                type="text"
                defaultValue={formData.fileNumber}
              />
              <Input
                name="position"
                label="Puesto"
                handleChange={handleChange}
                type="text"
                half
                defaultValue={formData.position}
              />
              <Input
                name="shift"
                label="Turno"
                handleChange={handleChange}
                type="text"
                half
                defaultValue={formData.shift}
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
                Modificar
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Modal>
  );
};

export default EditUserModal;
