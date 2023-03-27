"use client";
import React from "react";
import { Box } from "@mui/material";
import Login from "../components/Login";

function page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "primary.dark",
      }}
    >
      <Login />
    </Box>
  );
}

export default page;
