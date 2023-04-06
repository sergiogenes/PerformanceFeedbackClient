import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Welcome() {
  return (
    <Card sx={{ maxWidth: "500px", margin: "10px auto" }}>
      <CardMedia
        component="img"
        image="/GlobalNews.svg"
        alt="Bloqued"
        sx={{ p: "10px" }}
      />
      <CardContent>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Bienvenido
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Por favor, Inicie Sesión
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/login">
          <Button size="small" color="primary">
            Login
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
