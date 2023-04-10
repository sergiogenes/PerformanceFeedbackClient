import React, { useState } from "react";
import axios from "axios";
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
import { customMessage } from "../CustomMessage/CustomMessage";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Input from "../Input/Input";

const AddUserModal = ({
  open,
  onClose,
  positions,
  teams,
  categories,
  offices,
}) => {
  const userFormData = {
    firstName: "",
    lastName: "",
    email: "",
    fileNumber: "",
    position: "",
    team: "",
    category: "",
    office: "",
    leader: "",
    shift: "",
  };
  // States
  const [formData, setFormData] = useState(userFormData);
  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log("FORM DATA EN AXIOS", formData);
    e.preventDefault();
    await axios
      .post("http://localhost:3001/users", formData, { withCredentials: true })
      .then((newUser) =>
        customMessage(
          "success",
          `Nuevo Usuario (${newUser.data.fileNumber}) creado!`
        )
      )
      .catch((err) => customMessage("error", err.message));
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
            marginTop: "1rem",
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
              margin: "0.5rem",
              backgroundColor: "#FB9B14",
            }}
          >
            <PersonAddIcon />
          </Avatar>
          <Typography variant="h5">Nuevo Usuario:</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
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
                name="fileNumber"
                label="Legajo"
                handleChange={handleChange}
                type="text"
              />
              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="leader"
                label="Legajo del Jefe"
                handleChange={handleChange}
                type="text"
                half
              />
              <FormControl
                sx={{
                  mb: 2,
                  marginTop: "1rem",
                  marginLeft: "1rem",
                  width: "45%",
                }}
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
                    <MenuItem key={pos.id} value={pos.id}>
                      {pos.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  mb: 2,
                  marginLeft: "1rem",
                  width: "45%",
                }}
              >
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  label="Categoría"
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  mb: 2,
                  marginLeft: "1rem",
                  width: "45%",
                }}
              >
                <InputLabel id="team-label">Equipo</InputLabel>
                <Select
                  labelId="teams-label"
                  id="teams-select"
                  value={formData.team}
                  onChange={(e) =>
                    setFormData({ ...formData, team: e.target.value })
                  }
                  label="Equipo"
                  required
                >
                  {teams?.map((team) => (
                    <MenuItem key={team.id} value={team.id}>
                      {team.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  mb: 2,
                  marginLeft: "1rem",
                  width: "45%",
                }}
              >
                <InputLabel id="office-label">Oficina</InputLabel>
                <Select
                  labelId="office-label"
                  id="office-select"
                  value={formData.office}
                  onChange={(e) =>
                    setFormData({ ...formData, office: e.target.value })
                  }
                  label="Oficina"
                  required
                >
                  {offices.map((office) => (
                    <MenuItem key={office.id} value={office.id}>
                      {office.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl sx={{ mb: 2, marginLeft: "1rem", width: "45%" }}>
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
                  <MenuItem value="night">Noche</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "0.5rem",
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
