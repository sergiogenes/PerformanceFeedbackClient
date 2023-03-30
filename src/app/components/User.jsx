"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Me.module.css";
import {
  AppBar,
  Container,
  Toolbar,
  Grid,
  Button,
  Avatar,
  Divider,
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  TextField,
} from "@mui/material";

export function User() {
  return (
    <div className={styles.container}>
      <Grid container sx={{ marginLeft: 20 }}>
        <Grid item xs={12} sx={{ marginBottom: 10, marginTop: 5 }}>
          <Box className={styles.titleText}>Mi cuenta</Box>
        </Grid>
        <Card
          sx={{
            height: "100%",
            background: "#F6FAFF",
            border: "1px solid #CCE5FF",
            borderRadius: "16px",
          }}
        >
          <Avatar
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/Perfil.svg`}
            sx={{ width: 300, height: 300, margin: "75px 75px" }}
          />
        </Card>
        <Grid
          item
          xs={8}
          sx={{
            background: "#F6FAFF",
          }}
        >
          <Card
            sx={{
              height: "100%",
              background: "#F6FAFF",
              border: "1px solid #CCE5FF",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                sx={{ margin: "20px 40px 40px 30px" }}
                gutterBottom
                variant="h3"
                component="div"
              >
                Apellido y Nombre
              </Typography>
              <Typography
                sx={{ margin: "10px 10px 10px 45px" }}
                variant="h5"
                color="text.secondary"
              >
                Número de Legajo:
              </Typography>
              <Typography
                sx={{ margin: "10px 10px 10px 45px" }}
                variant="h5"
                color="text.secondary"
              >
                Puesto:
              </Typography>
              <Typography
                sx={{ margin: "10px 10px 10px 45px" }}
                variant="h5"
                color="text.secondary"
              >
                Oficina:
              </Typography>
              <Typography
                sx={{ margin: "10px 10px 10px 45px" }}
                variant="h5"
                color="text.secondary"
              >
                País:
              </Typography>
              <Typography
                sx={{ margin: "10px 10px 10px 45px" }}
                variant="h5"
                color="text.secondary"
              >
                Categoría:
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
