import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";

import Table from "../../../../commons/Table";
import { Typography } from "@mui/material";
import { customMessage } from "../../../../commons/CustomMessage/CustomMessage";
import DeleteButton from "../../../../commons/DeleteButton";
import EditButton from "../../../../commons/EditButton";

const FeedbacksPage = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const { evaluatedId } = router.query;
  console.log("id del evaluado", evaluatedId);

  const [indicators, setIndicators] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [evaluated, setEvaluated] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${evaluatedId}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((newEvaluated) => {
        console.log("nuevo evaluado", newEvaluated);
        setEvaluated(newEvaluated);
        return newEvaluated;
      })
      .then((newEvaluated) => {
        // Hay que cambiar esta ruta del axios
        console.log("evaluado", newEvaluated);
        axios
          .get(
            `http://localhost:3001/indicators/category/${newEvaluated.category.id}`,
            {
              withCredentials: true,
            }
          )
          .then((response) => response.data)
          .then((newIndicators) => setIndicators(newIndicators));
      })
      .catch((error) => customMessage(error.message));
  }, [evaluatedId]);

  const headers = [
    {
      field: "category",
      headerName: "Categoría",
      flex: 1.5,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.value.name}`,
    },
    {
      field: "description",
      headerName: "Descripción",
      flex: 2,
      headerClassName: "theme--header",
      editable: true,
    },
    {
      field: "goal",
      headerName: "Objetivo",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "data",
      headerName: "Dato",
      flex: 1,
      headerClassName: "theme--header",
      editable: true,
    },
    {
      field: "result",
      headerName: "Resultado",
      flex: 1,
      headerClassName: "theme--header",
      valueGetter: (params) => `${params.row.goal - params.row.data || ""}`,
    },
    {
      field: "feedback",
      headerName: "Devolución",
      flex: 1,
      headerClassName: "theme--header",
      editable: true,
    },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      headerClassName: "theme--header",
      editable: true,
    },
    {
      field: "periodo",
      headerName: "Periodo",
      flex: 1,
      headerClassName: "theme--header",
      editable: true,
    },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <EditButton
            onClick={() => console.log(index.row)}
            /* onClick={toggleEditUserModal} row={index.row} */
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Devolución actual
      </Typography>
      <Table columns={headers} rows={indicators} pageSize={5} />
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Histórico de devoluciones
      </Typography>
      <Table columns={headers} rows={indicators} pageSize={5} />
    </>
  );
};

export default FeedbacksPage;
