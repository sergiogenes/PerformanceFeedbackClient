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
import { customMessage } from "../CustomMessage/CustomMessage";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import axios from "axios";
import Input from "../Input/Input";

const fakeCountries = [
  { id: 1, name: "Argentina", ISO: "AR" },
  { id: 2, name: "Estados Unidos", ISO: "US" },
  { id: 3, name: "Chile", ISO: "CL" },
];

const AddOfficeModal = ({ open, onClose, countries = fakeCountries }) => {
  const officeFormData = {
    denomination: "",
    country: "",
  };

  // States
  const [formData, setFormData] = useState(officeFormData);
  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* await axios
      .post("http://localhost:3001/office", formData, { withCredentials: true })
      .then((newOffice) =>
        customMessage("success",`Nueva oficina (${newOffice.data.name}) creada!`)
      )
      .catch((err) => customMessage("error",err)); */
    onClose();
  };

  const handleCancel = (e) => {
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
            <DomainAddIcon />
          </Avatar>
          <Typography variant="h5">Nueva Oficina:</Typography>
          <form
            style={{ width: "100%", marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Input
                name="denomination"
                label="Denominación"
                handleChange={handleChange}
                type="text"
              />
              <FormControl fullWidth sx={{ mb: 2, margin: "1rem" }}>
                <InputLabel id="country-label">País</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-select"
                  value={formData.country}
                  onChange={(e) => {
                    console.log("e.target.value", e.target.value);
                    setFormData({ ...formData, country: e.target.value });
                  }}
                  label="País"
                  required
                >
                  {countries.map((country, i) => (
                    <MenuItem key={i} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
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
                onClick={handleCancel}
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

export default AddOfficeModal;
