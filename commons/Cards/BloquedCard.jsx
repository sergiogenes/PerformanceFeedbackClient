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

export default function BloquedCard() {
  return (
    <Card sx={{ maxWidth: "400px", margin: "10px auto" }}>
      <CardMedia
        component="img"
        height="350"
        image="/bloquedImage.png"
        alt="Bloqued"
      />
      <CardContent>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          No Autorizado!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Usted no tiene los privilegios para ver este contenido.
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/">
          <Button size="small" color="primary">
            Volver al Inicio
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
