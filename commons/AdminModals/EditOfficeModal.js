import React, { useState, useEffect } from "react";
import { message } from "antd";
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
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import axios from "axios";
import Input from "../Input/Input";
import OfficesPage from "../../pages/admin/offices";

const fakeCountries = [
  { id: 1, name: "Argentina", ISO: "AR" },
  { id: 2, name: "Estados Unidos", ISO: "US" },
  { id: 3, name: "Chile", ISO: "CL" },
];

const EditOfficeModal = ({
  open,
  onClose,
  office,
  countries = fakeCountries,
}) => {
  const officeFormData = {
    name: office?.name || "",
    countryId: office?.countryId || null,
  };

  // States
  const [formData, setFormData] = useState(officeFormData);

  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `http://localhost:3001/offices/${office.id}`,
        { name: formData.name, countryId: formData.countryId },
        { withCredentials: true }
      )
      .then((updateOffice) =>
        message.success(`Oficina Actualiza: ${updateOffice.data.name}!`)
      )
      .catch((err) => message.error(err));
    return onClose();
  };

  const handleCancel = (e) => {
    return onClose();
  };

  // useEffects
  useEffect(() => {
    if (open) {
      setFormData({
        name: office?.name || "",
        countryId: office?.countryId || null,
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
          <Typography variant="h5">Editar Oficina:</Typography>
          <form
            style={{ width: "100%", marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Input
                name="name"
                label="Denominación"
                handleChange={handleChange}
                type="text"
                defaultValue={office?.name}
              />
              <FormControl fullWidth sx={{ mb: 2, margin: "1rem" }}>
                <InputLabel id="country-label">País</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-select"
                  value={formData?.countryId}
                  onChange={(e) => {
                    console.log("e.target.value", e.target.value);
                    setFormData({
                      ...formData,
                      countryId: e.target.value,
                    });
                  }}
                  label="País"
                  required
                >
                  {countries.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
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
                EDITAR
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Modal>
  );
};

export default EditOfficeModal;
