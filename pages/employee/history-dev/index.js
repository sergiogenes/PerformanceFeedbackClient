import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Table from "../../../commons/Table";
import { Typography } from "@mui/material";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";

const HistoryPage = () => {
  const user = useSelector((state) => state.user);

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/reviews/${user.id}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((newFeedbacks) => setFeedbacks(newFeedbacks))
      .catch((error) => customMessage(error.message));
  }, []);

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
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Mis Feedbacks
      </Typography>
      <Table columns={headers} rows={feedbacks} pageSize={10} />
    </>
  );
};

export default HistoryPage;
