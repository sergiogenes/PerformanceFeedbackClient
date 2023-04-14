import React, { useEffect, useState } from "react";
import Table from "../../../commons/Table";
import { useSelector } from "react-redux";
import axios from "axios";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Typography } from "@mui/material";
import { Tag } from "antd";

const Indicators = () => {
  //Redux
  const user = useSelector((state) => state.user);
  // States
  const [indicators, setIndicators] = useState([]);
  // Effects
  useEffect(() => {
    axios
      .get(`http://localhost:3001/indicators/category/${user.categoryId}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((indicators) => setIndicators(indicators))
      .catch((error) => customMessage(error.message));
  }, []);
  // Headers
  const headers = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
      headerClassName: "theme--header",
      headerAlign: "flex",
      sx: { paddingLeft: "5px" },
    },
    {
      field: "description",
      headerName: "Descripción",
      flex: 2,
      headerClassName: "theme--header",
    },
    {
      field: "goal",
      headerName: "Objetivo",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "category",
      headerName: "Categoría",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
  ];

  return (
    <>
      <Tag
        style={{
          borderRadius: 25,
          marginBottom: "0.5rem",
          marginLeft: "1rem",
          color: "#565659",
          backgroundColor: "#CCE5FF",
          borderColor: "#CCE5FF",
          maxHeight: "34px",
        }}
      >
        <Typography variant="h6">Mis Indicadores</Typography>
      </Tag>
      <Table columns={headers} rows={indicators} pageSize={10} />
    </>
  );
};

export default Indicators;
