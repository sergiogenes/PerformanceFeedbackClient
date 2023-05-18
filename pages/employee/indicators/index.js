import React, { useEffect, useState } from "react";
import Table from "../../../commons/Table";
import { useSelector } from "react-redux";
import axios from "axios";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Typography } from "@mui/material";

const Indicators = () => {
  const user = useSelector((state) => state.user);
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/indicators/category/${user.categoryId}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((indicators) => setIndicators(indicators))
      .catch((error) => customMessage(error.message));
  }, []);

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
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Mis Indicadores
      </Typography>
      <Table columns={headers} rows={indicators} pageSize={5} />
    </>
  );
};

export default Indicators;
