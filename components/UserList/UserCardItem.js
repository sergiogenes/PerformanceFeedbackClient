import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Link,
} from "@mui/material";
import { Tooltip } from "antd";

const UserCardItem = ({ employee }) => {
  return (
    <Grid item lg={3} md={3} sm={4} xs={6}>
      <Link
        href={`employee/feedbacks/${employee.id}`}
        underline="none"
        props={employee.id}
      >
        <Tooltip title="click para hacer Devolución" placement="topLeft">
          <ListItem key={employee.id} style={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar
                src={employee.image}
                alt={employee.name}
                sx={{ width: 50, height: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={employee.firstName}
              secondary={employee.position.name}
            />
          </ListItem>
        </Tooltip>
      </Link>
    </Grid>
  );
};

export default UserCardItem;
