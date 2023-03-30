"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logOut } from "@/redux/user";
import { message } from "antd";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Container,
  Button,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box } from "@mui/system";
import axios from "axios";

/* 
const user = {
  name: "John",
  lastName: "Doe",
  isAdmin: false,
  puesto: "Software Engineer",
  categoría: "IT",
  avatar: "https://avatars.dicebear.com/api/pixel-art-neutral/fotoperfil.svg",
}; */

export function Navigation({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    axios
      .post("http://localhost:3001/auth/logout")
      .then(() => {
        dispatch(logOut());
        message.success("Sesión Finalizada");
        router.push("/login");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/me">
            <Image
              src="/logoGN.png"
              alt="GlobalNews Group Logo"
              width={190}
              height={50}
              priority
            ></Image>
          </Link>
          <Container
            sx={{
              display: "flex",
              direction: "row",
              justifyContent: "flex-end",
              alignContent: "center",
            }}
          >
            {user.isAdmin ? (
              <>
                <Box sx={{ margin: "auto 10px" }}>
                  <Link href="/dashboard" style={{ textDecoration: "none" }}>
                    <Button variant="contained">Dashboard</Button>
                  </Link>
                </Box>

                <Box style={{ order: 1 }}>
                  <Button
                    onClick={handleLogout}
                    variant="contained"
                    color="error"
                  >
                    Logout
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ margin: "auto 10px" }}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <Link href="/me" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
                    </Link>
                    <Link
                      href="/indicadores"
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleClose}>Indicadores</MenuItem>
                    </Link>
                    <Link
                      href="/mi-historial"
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleClose}>Historial</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </Box>

                <Box style={{ order: 1 }}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <Link href="/me">
                      <Avatar
                        width="48"
                        height="48"
                        alt="User Image"
                        src={`https://avatars.dicebear.com/api/pixel-art-neutral/user.svg`}
                      />
                    </Link>
                  </IconButton>
                </Box>
              </>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
