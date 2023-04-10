import React, { useEffect, useState } from "react";
import Table from "../../../commons/Table";
import { useSelector } from "react-redux";
import axios from "axios";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const History = ({ columns, rows }) => {
  const user = useSelector((state) => state.user);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/indicators/category/${user.categoryId}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((feedbacks) => setFeedbacks(feedbacks))
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
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <Edit onClick={(e) => console.log("update", index.row)} />
          <Delete onClick={(e) => console.log("delete", index.row)} />
        </>
      ),
    },
  ];

  const feedbacksRows = feedbacks.map((feedback) => {
    return {
      ...feedback,
    };
  });

  return (
    <>
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Mis Feedbacks
      </Typography>
      <Table columns={headers} rows={feedbacksRows} pageSize={5} />
    </>
  );
};

export default History;
