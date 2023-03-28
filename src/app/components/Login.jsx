"use client";
import axios from "axios";
import Image from "next/image";
import Input from "../commons/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/user";
import { Box, Typography, Paper, Button } from "@mui/material";
import { message } from "antd";

const Login = () => {
  const initialFormState = {
    email: "",
    password: "",
  };
  // Redux
  const dispatch = useDispatch();
  // Router
  const router = useRouter();
  // States
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  // Handlers
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = handleEmail(formData.email);
    validEmail === true
      ? axios
          .post("http://localhost:3001/auth/login", formData, {
            withCredentials: true,
          })
          .then((cookie) => {
            if (cookie.data !== "") {
              dispatch(logIn(cookie.data));
              message.success("Sesión iniciada!");
              router.push("/");
            } else {
              message.error("Credenciales inválidas");
            }
          })
          .catch((err) => console.log(err))
      : message.warning("Email incorrecto, intente otra vez");
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
          variant={
            formData.email === "" || formData.password.length < 8
              ? "disabled"
              : "contained"
          }
        >
          Ingresar
        </Button>
      </Box>
    </Paper>
  );
};

export default Login;
