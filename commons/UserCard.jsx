import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { Tag } from "antd";

export function UserCard({ user }) {
  return (
    <Grid item lg={6} md={6} sm={8} xs={12}>
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
      </Card>
    </Grid>
  );
}
