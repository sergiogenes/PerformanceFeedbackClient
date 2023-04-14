import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Card, Statistic, Tag, Divider } from "antd";
import { Typography, Grid } from "@mui/material";
import CountUp from "react-countup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import { PieChart } from "../commons/Charts/PieChart";
import { GeoChart } from "../commons/Charts/GeoChart";

const Dashboard = () => {
  const formatter = (value) => (
    <CountUp end={value} duration={5} separator="." />
  );
  // States
  const [activeUsers, setActiveUsers] = useState([]);
  const [deactivatedUsers, setDeactivatedUsers] = useState([]);
  const [allOffices, setAllOffices] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  // Redux
  const user = useSelector((state) => state.user);
  // Effects
  useEffect(() => {
    axios
      .get("http://localhost:3001/users", { withCredentials: true })
      .then((response) => {
        setActiveUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/users/disabled", { withCredentials: true })
      .then((response) => {
        setDeactivatedUsers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/offices", {
        withCredentials: true,
      })
      .then((res) => setAllOffices(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/teams", {
        withCredentials: true,
      })
      .then((res) => setAllTeams(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {user ? (
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Card bordered={false}>
              <Tag
                style={{
                  borderRadius: 25,
                  color: "#565659",
                  backgroundColor: "#CDEEDC",
                  borderColor: "#CDEEDC",
                  maxHeight: "24px",
                }}
              >
                <Typography variant="subtitle2">Usuarios Activos</Typography>
              </Tag>
              <Divider style={{ backgroundColor: "#1369B4" }} />
              <Statistic
                value={activeUsers.length}
                valueStyle={{ color: "#1369B4" }}
                prefix={<AccountCircleIcon />}
                formatter={formatter}
              />
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Card bordered={false}>
              <Tag
                style={{
                  borderRadius: 25,
                  color: "#565659",
                  backgroundColor: "#EBCDFF",
                  borderColor: "#EBCDFF",
                  maxHeight: "24px",
                }}
              >
                <Typography variant="subtitle2">
                  Usuarios Desactivados
                </Typography>
              </Tag>
              <Divider style={{ backgroundColor: "#1369B4" }} />
              <Statistic
                value={deactivatedUsers.length}
                valueStyle={{ color: "#1369B4" }}
                prefix={<NoAccountsIcon />}
                formatter={formatter}
              />
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Card bordered={false}>
              <Tag
                style={{
                  borderRadius: 25,
                  color: "#565659",
                  backgroundColor: "#FFECAB",
                  borderColor: "#FFECAB",
                  maxHeight: "24px",
                }}
              >
                <Typography variant="subtitle2">Oficinas Activas</Typography>
              </Tag>
              <Divider style={{ backgroundColor: "#1369B4" }} />
              <Statistic
                value={allOffices.length}
                valueStyle={{ color: "#1369B4" }}
                prefix={<BusinessIcon />}
                formatter={formatter}
              />
            </Card>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Card bordered={false}>
              <Tag
                style={{
                  borderRadius: 25,
                  color: "#565659",
                  backgroundColor: "#FFD7CA",
                  borderColor: "#FFD7CA",
                  maxHeight: "24px",
                }}
              >
                <Typography variant="subtitle2">Equipos Activos</Typography>
              </Tag>
              <Divider style={{ backgroundColor: "#1369B4" }} />
              <Statistic
                value={allTeams.length}
                valueStyle={{ color: "#1369B4" }}
                prefix={<GroupsIcon />}
                formatter={formatter}
              />
            </Card>
          </Grid>
          <Grid item lg={5} md={5} sm={11} xs={11}>
            <PieChart />
          </Grid>
          <Grid item lg={7} md={7} sm={11} xs={11}>
            <GeoChart />
          </Grid>
        </Grid>
      ) : (
        <h1>NO ESTA LOGUEADO</h1>
      )}
    </>
  );
};

export default Dashboard;
