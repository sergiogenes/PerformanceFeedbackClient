import React, { useState, useEffect } from "react";
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
import SaveAsIcon from "@mui/icons-material/SaveAs";
import axios from "axios";
import Input from "../Input/Input";

const EditUserModal = ({
  user,
  open,
  onClose,
  positions,
  teams,
  categories,
  offices,
}) => {
  const userFormData = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    fileNumber: user?.fileNumber || "",
    position: user?.positionId || null,
    team: user?.teamId || null,
    category: user?.categoryId || null,
    office: user?.officeId || null,
    leader: user?.leader?.fileNumber || null,
    shift: user?.shift || "",
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
      .put(`/api/users/${user.id}`, formData, {
        withCredentials: true,
      })
      .then(() =>
        customMessage("success", `Usuario (${user.fileNumber}) modificado`)
      )
      .catch((err) => customMessage("error", err.message));
    onClose();
  };
  // Effects
  useEffect(() => {
    if (open) {
      setFormData({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        fileNumber: user?.fileNumber || "",
        position: user?.positionId || null,
        team: user?.teamId || null,
        category: user?.categoryId || null,
        office: user?.officeId || null,
        leader: user?.leader?.fileNumber || null,
        shift: user?.shift || "",
      });
    }
  }, [open]);

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
            <SaveAsIcon />
          </Avatar>
          <Typography variant="h5">Modificar Usuario:</Typography>
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
                defaultValue={userFormData.firstName?.toString()}
              />
              <Input
                name="lastName"
                label="Apellido"
                handleChange={handleChange}
                type="text"
                half
                defaultValue={userFormData.lastName?.toString()}
              />
              <Input
                name="fileNumber"
                label="Legajo"
                handleChange={handleChange}
                type="text"
                defaultValue={userFormData.fileNumber?.toString()}
              />
              <Input
                name="email"
                label="Email"
                handleChange={handleChange}
                type="email"
                defaultValue={userFormData.email?.toString()}
              />
              <Input
                name="leader"
                label="Legajo del Jefe"
                handleChange={handleChange}
                type="text"
                half
                defaultValue={userFormData.leader}
              />
              <FormControl
                fullWidth
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
                  value={formData?.position}
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
                fullWidth
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
                  value={formData?.category}
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
                fullWidth
                sx={{
                  mb: 2,
                  marginLeft: "1rem",
                  width: "45%",
                }}
              >
                <InputLabel id="team-label">Equipo</InputLabel>
                <Select
                  labelId="team-label"
                  id="team-select"
                  value={formData?.team}
                  onChange={(e) =>
                    setFormData({ ...formData, team: e.target.value })
                  }
                  label="Equipo"
                  required
                >
                  {teams.map((team) => (
                    <MenuItem key={team.id} value={team.id}>
                      {team.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                fullWidth
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
                  value={formData?.office}
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
                  value={formData.shift ?? userFormData.shift}
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
