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
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const NavAdmin = ({ handleLogout, open }) => {
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/dashboard">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Dashboard" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/users">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Usuarios" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <People />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Usuarios" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/positions">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Puestos" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Work />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Puestos" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/categories">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Categorias" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountTree />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Categorías" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/offices">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Oficinas" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Business />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Oficinas" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </Link>
      </ListItem>

      <ListItem disablePadding sx={{ display: "block" }}>
        <Link href="/admin/teams">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <Tooltip title="Equipos" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Groups />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Equipos" sx={{ opacity: open ? 1 : 0 }} />
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
            <Tooltip title="Cerrar Sesión" placement="right-end">
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Logout />
              </ListItemIcon>
            </Tooltip>
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
