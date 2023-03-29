"use client";

import { useState } from "react";
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
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Box } from "@mui/system";

export function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
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
                <MenuItem onClick={handleClose}>Mi Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Indicadores</MenuItem>
                <MenuItem onClick={handleClose}>Historial</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
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
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
