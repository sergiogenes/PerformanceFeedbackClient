"use client";
import { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import Input from "../commons/Input";
import Image from "next/image";

const Login = () => {
  const initialFormState = {
    email: "",
    password: "",
  };
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  // Handlers
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "50%",
        height: "450px",
        paddingTop: "56px",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingBottom: "56px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "66px",
          justifyContent: "space-between",
        }}
      >
        <Typography>Te damos la bienvenida a</Typography>
        <Image
          src="/GlobalNews.svg"
          alt="GlobalNews Group Logo"
          width={100}
          height={24}
          priority
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          label="Correo electrónico"
          handleChange={handleChange}
          type="email"
        />
        <Input
          name="password"
          label="Contraseña"
          handleChange={handleChange}
          type={showPassword ? "text" : "password"}
          handleShowPassword={handleShowPassword}
        />
        <Button
          style={{
            marginTop: "1rem",
            backgroundColor: "#E4E4E4",
            color: "#8D8D8D",
          }}
          type="submit"
          fullWidth
          color="primary"
        >
          Ingresar
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;

/**
 * <TextField
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="email"
          label="Correo electrónico"
        />
        <TextField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          id="password"
          type="password"
          autoComplete="current-password"
          label="Contraseña"
        />
        <Button variant="contained">Ingresá</Button>
 */
