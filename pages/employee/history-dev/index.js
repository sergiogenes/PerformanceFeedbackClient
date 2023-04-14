import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Table from "../../../commons/Table";
import { Typography } from "@mui/material";
import { Tag } from "antd";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";

const HistoryPage = () => {
  // Redux
  const user = useSelector((state) => state.user);
  // States
  const [feedbacks, setFeedbacks] = useState([]);
  // Effects
  useEffect(() => {
    axios
      .get(`http://localhost:3001/reviews/${user.id}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((newFeedbacks) => setFeedbacks(newFeedbacks))
      .catch((error) => customMessage(error.message));
  }, []);
  // Headers
  const headers = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
      headerClassName: "theme--header",
      headerAlign: "flex",
      sx: { paddingLeft: "5px" },
    },
    {
      field: "category",
      headerName: "Categoría",
      flex: 1.5,
      headerClassName: "theme--header",
      valueGetter: (params) =>
        `${params.value?.name || params.row.evaluated.category.name}`,
    },
    {
      field: "description",
      headerName: "Descripción",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params?.value || params.row.indicator}`,
    },
    {
      field: "goal",
      headerName: "Objetivo",
      flex: 0.6,
      headerClassName: "theme--header",
    },
    {
      field: "data",
      headerName: "Dato",
      flex: 0.6,
      headerClassName: "theme--header",
    },
    {
      field: "result",
      headerName: "Resultado",
      flex: 0.6,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.row.data - params.row.goal || ""}`,
    },
    {
      field: "review",
      headerName: "Devolución",
      flex: 3,
      headerClassName: "theme--header",
    },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.row.date.slice(0, 10)}`,
    },
    {
      field: "period",
      headerName: "Periodo",
      flex: 1,
      headerClassName: "theme--header",
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
          backgroundColor: "#FFEDAB",
          borderColor: "#FFEDAB",
          maxHeight: "34px",
        }}
      >
        <Typography variant="h6">Mis Devoluciones</Typography>
      </Tag>
      <Table columns={headers} rows={feedbacks} pageSize={10} />
    </>
  );
};

export default HistoryPage;
