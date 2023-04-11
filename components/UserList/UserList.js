import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, List, Paper, Typography } from "@mui/material";
import { Tag } from "antd";
import axios from "axios";
import UserCardItem from "./UserCardItem";

const UserList = () => {
  // States
  const [employees, setEmployees] = useState([]);
  // Redux
  const leader = useSelector((store) => store.user);
  // Effects
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/empleados/${leader.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Paper>
        <Tag
          style={{
            borderRadius: 25,
            color: "#565659",
            backgroundColor: "#FFD7CA",
            borderColor: "#FFD7CA",
            maxHeight: "24px",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          <Typography variant="subtitle2">Mis Empleados Directos</Typography>
        </Tag>
        <List
          style={{
            display: "flex",
            direction: "row",
          }}
        >
          <Grid container spacing={2}>
            {employees.map((elem, i) => (
              <UserCardItem key={i} employee={elem} />
            ))}
          </Grid>
        </List>
      </Paper>
    </Grid>
  );
};

export default UserList;
