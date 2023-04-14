import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Tag } from "antd";
import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

export function UserCard({ user }) {
  const [passwordModal, setPasswordModal] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const togglePasswordModal = () => {
    setPasswordModal((prevState) => !prevState);
    setRefresh(!refresh);
  };

  return (
    <Grid item lg={6} md={6} sm={12} xs={12}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tag
          style={{
            borderRadius: 25,
            color: "#565659",
            backgroundColor: "#CDEEDC",
            borderColor: "#CDEEDC",
            maxHeight: "24px",
            maxWidth: "80px",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          <Typography variant="subtitle2">Mis Datos</Typography>
        </Tag>
        <CardContent
          style={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          <Avatar
            sx={{
              width: "125px",
              height: "125px",
            }}
            alt={user.firstName}
            src={`${user.image}`}
          />
          <Container>
            <Typography variant="h5" component="h2">
              {`${user.firstName}  ${user.lastName}`}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {user.email}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Legajo: {user.fileNumber}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Turno: {user.shift}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Puesto: {user.positionId}
            </Typography>
          </Container>
        </CardContent>
        <Button
          onClick={togglePasswordModal}
          variant="contained"
          sx={{
            backgroundColor: "#49A2FB",
            "&hover": { backgroundColor: "#1686F7" },
          }}
          startIcon={<Edit />}
        >
          Cambiar Contraseña
        </Button>
        <ChangePasswordModal
          user={user}
          open={passwordModal}
          onClose={togglePasswordModal}
        />
      </Card>
    </Grid>
  );
}
