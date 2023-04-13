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
  AccountTree,
  Work,
  People,
  Business,
  Logout,
  Groups,
  Assignment,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const NavAdmin = ({ handleLogout, open }) => {
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/">
          <Tooltip title="Dashboard" placement="right">
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
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/users">
          <Tooltip title="Usuarios" placement="right">
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
                <People />
              </ListItemIcon>

              <ListItemText primary="Usuarios" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/positions">
          <Tooltip title="Puestos" placement="right">
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
                <Work />
              </ListItemIcon>
              <ListItemText primary="Puestos" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/categories">
          <Tooltip title="Categorias" placement="right">
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
                <AccountTree />
              </ListItemIcon>
              <ListItemText
                primary="Categorías"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/offices">
          <Tooltip title="Oficinas" placement="right">
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
                <Business />
              </ListItemIcon>
              <ListItemText primary="Oficinas" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/teams">
          <Tooltip title="Equipos" placement="right">
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
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Equipos" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/indicators">
          <Tooltip title="Indicadores" placement="right">
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
                primary="Indicadores"
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
