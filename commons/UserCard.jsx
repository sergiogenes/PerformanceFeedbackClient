"use client";
import React, { useState } from "react";
import { Card, CardContent, Avatar, Typography, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const ProfilePhotoContainer = styled("div")({
  position: "relative",
  padding: "16px",
  justifyContent: "center",
  alignContent: "center",
  "&:hover .profilePhotoEditIcon": {
    display: "block",
  },
});

export function UserCard({ user }) {
  return (
    <Card
      sx={{
        display: "flex",
        direction: "row",
        padding: "10px",
        margin: "16px",
      }}
    >
      <Container
        sx={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ProfilePhotoContainer>
          <Avatar
            sx={{
              width: "200px",
              height: "200px",
              position: "relative",
              justifyContent: "center",
            }}
            alt={user.firstName}
            src={user.image}
          />
        </ProfilePhotoContainer>
      </Container>
      <Container>
        <CardContent>
          <Typography variant="h5" component="h2">
            {`${user.firstName}  ${user.lastName}`}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {user.email}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {user.fileNumber}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {user.shift}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            IT
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            FullStack Developer
          </Typography>
        </CardContent>
      </Container>
    </Card>
  );
}
