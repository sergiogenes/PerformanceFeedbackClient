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
import { customMessage } from "../CustomMessage/CustomMessage";
import WorkIcon from "@mui/icons-material/Work";
import axios from "axios";
import Input from "../Input/Input";

const AddIndicatorModal = ({ open, onClose, category }) => {
  // States
  const indicatorFormData = {
    description: "",
    goal: "",
  };
  const [formData, setFormData] = useState(indicatorFormData);
  // Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData["category"] = category.name;
    await axios
      .post("http://localhost:3001/indicators/", formData, {
        withCredentials: true,
      })
      .then((response) =>
        customMessage(
          "success",
          `Nuevo Indicador creado ID: ${response.data.id}`
        )
      )
      .catch((error) => customMessage("error", error.message));
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
            <WorkIcon />
          </Avatar>
          <Typography variant="h5">Nuevo Indicador:</Typography>
          <form
            style={{ width: "100%", marginTop: "2rem" }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Input
                name="description"
                label="Descripción"
                handleChange={handleChange}
                type="text"
              />
              <Input
                name="goal"
                label="Objetivo"
                handleChange={handleChange}
                type="text"
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

export default AddIndicatorModal;
