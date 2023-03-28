"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import {
  AppBar,
  Container,
  Toolbar,
  Grid,
  Button,
  Avatar,
  Divider,
} from "@mui/material";

const links = [
  { label: "Home", route: "/" },
  { label: "Usuarios", route: "/users" },
  { label: "Categorías", route: "/categorias" },
  { label: "Equipos", route: "/equipos" },
  { label: "Indicadores", route: "/indicadores" },
  { label: "Oficinas", route: "/oficinas" },
];

export function NavAdmin() {
  return (
    <AppBar sx={{ background: "##1686f7;" }} position="flex">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
          >
            <Image
              src="/logoGN.png"
              alt="GlobalNews Group Logo"
              width={190}
              height={50}
              priority
            />
          </Grid>

          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            position="relative"
          >
            {links.map(({ label, route }) => (
              <Grid key={route} item>
                <Link href={route} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      color: "white",
                      background: "#0571DF",
                    }}
                    variant="contained"
                  >
                    {label}
                  </Button>
                </Link>
              </Grid>
            ))}
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{
                marginLeft: 8,
              }}
            ></Divider>
            <Grid item>
              <Link href="/me">
                <Avatar
                  src={`https://avatars.dicebear.com/api/pixel-art-neutral/Login.svg`}
                  sx={{ width: 48, height: 48, marginLeft: 6 }}
                />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
