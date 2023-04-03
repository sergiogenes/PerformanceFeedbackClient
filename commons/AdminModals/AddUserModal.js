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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import Input from "../Input/Input";
import { message } from "antd";

const AddUserModal = ({ open, onClose, positions }) => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/users", formData, { withCredentials: true })
      .then((newUser) =>
        message.success(`Nuevo Usuario (${newUser.data.fileNumber}) creado!`)
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
              <FormControl
                fullWidth
                sx={{ mb: 2, marginTop: "1rem", marginLeft: "1rem" }}
              >
                <InputLabel id="position-label">Puesto</InputLabel>
                <Select
                  labelId="position-label"
                  id="position-select"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  label="Puesto"
                  required
                >
                  {positions.map((pos) => (
                    <MenuItem key={pos.id} value={pos.name}>
                      {pos.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2, marginLeft: "1rem" }}>
                <InputLabel id="shift-label">Turno</InputLabel>
                <Select
                  labelId="shift-label"
                  id="shift-select"
                  value={formData.shift}
                  onChange={(e) =>
                    setFormData({ ...formData, shift: e.target.value })
                  }
                  label="Turno"
                  required
                >
                  <MenuItem value="morning">Mañana</MenuItem>
                  <MenuItem value="afternoon">Tarde</MenuItem>
                  <MenuItem value="nigth">Noche</MenuItem>
                </Select>
              </FormControl>
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

export default AddUserModal;
