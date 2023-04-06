import React from "react";
import Link from "next/link";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider as DividerIcon,
  List,
} from "@mui/material";
import {
  AccountCircle,
  Assignment,
  History,
  Logout,
} from "@mui/icons-material";

export const NavUser = ({ handleLogout, open }) => {
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Mi Perfil" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/employee/indicators">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Assignment />
            </ListItemIcon>
            <ListItemText
              primary="Mis Indicadores"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/employee/history-dev">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <History />
            </ListItemIcon>
            <ListItemText
              primary="Mi Historial"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      </ListItem>
      <DividerIcon />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Logout />
            </ListItemIcon>
            <ListItemText
              primary="Cerrar Sesión"
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
