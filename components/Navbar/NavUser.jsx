import React from "react";
import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider as DividerIcon,
  List,
  Tooltip,
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
          <Tooltip title="Mi Perfil" placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  "& .MuiSvgIcon-root": {
                    color: "#FB9B14",
                  },
                },
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
              <ListItemText
                primary="Mi Perfil"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/employee/indicators">
          <Tooltip title="Mis Indicadores" placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  "& .MuiSvgIcon-root": {
                    color: "#FB9B14",
                  },
                },
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
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/employee/history-dev">
          <Tooltip title="Mis Devoluciones" placement="right">
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  "& .MuiSvgIcon-root": {
                    color: "#FB9B14",
                  },
                },
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
                primary="Mis Devoluciones"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>
      <DividerIcon />
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <Tooltip title="Cerrar Sesión" placement="right">
            <ListItemButton
              onClick={handleLogout}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  "& .MuiSvgIcon-root": {
                    color: "#C72F00",
                  },
                },
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
          </Tooltip>
        </ListItem>
      </List>
    </>
  );
};
