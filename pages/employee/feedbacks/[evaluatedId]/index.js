import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import Table from "../../../../commons/Table";
import { Typography } from "@mui/material";
import { customMessage } from "../../../../commons/CustomMessage/CustomMessage";
import SaveButton from "../../../../commons/SaveButton";

const FeedbacksPage = () => {
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const evaluatedId = router.query.evaluatedId;
  // States
  const [indicators, setIndicators] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [evaluated, setEvaluated] = useState({});
  const [refresh, setRefresh] = useState(false);
  // Effects
  useEffect(() => {
    if (evaluatedId) {
      axios
        .get(`http://localhost:3001/users/${evaluatedId}`, {
          withCredentials: true,
        })
        .then((response) => response.data)
        .then((newEvaluated) => {
          setEvaluated(newEvaluated);
          return newEvaluated;
        })
        .then((newEvaluated) => {
          axios
            .get(
              `http://localhost:3001/indicators/category/${newEvaluated.category.id}`,
              {
                withCredentials: true,
              }
            )
            .then((response) => response.data)
            .then((newIndicators) => setIndicators(newIndicators));
          axios
            .get(`http://localhost:3001/reviews/${newEvaluated.id}`, {
              withCredentials: true,
            })
            .then((response) => response.data)
            .then((newFeedbacks) => setFeedbacks(newFeedbacks));
        })
        .catch((error) => customMessage(error.message));
    }
  }, [evaluatedId, refresh]);
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
      flex: 1.2,
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
      editable: true,
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
      editable: true,
    },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      headerClassName: "theme--header",
      editable: true,
      valueGetter: (params) => `${params.row.date?.slice(0, 10) || ""}`,
    },
    {
      field: "period",
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
          <SaveButton
            onClick={() => {
              handleEdit(index.row);
            }}
          />
        </>
      ),
    },
  ];
  const headerHistory = headers.map((x) => x);
  headerHistory.pop();
  // Handlers
  const handleEdit = (row) => {
    const newReview = {
      evaluatedId,
      evaluatorId: user.id,
      period: row.period,
      idIndicator: row.id,
      indicator: row.description,
      goal: row.goal,
      data: row.data,
      review: row.review,
      date: row.date,
    };
    axios
      .post(`http://localhost:3001/reviews`, newReview, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then(() => {
        customMessage("success", "La devolución se ha creado exitosamente.");
        setRefresh(!refresh);
      })
      .catch((error) => customMessage("error", error.response.data));
  };

  return evaluated.id ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h5" sx={{ marginLeft: "10px" }}>
          {`Personal evaluado: ${evaluated.firstName} ${evaluated.lastName}`}
        </Typography>
        <Typography variant="h5" sx={{ marginLeft: "10px" }}>
          {`Legajo: ${evaluated.fileNumber}`}
        </Typography>
      </div>
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Devolución actual
      </Typography>
      <Table columns={headers} rows={indicators} pageSize={5} />
      <Typography variant="h6" sx={{ marginLeft: "10px", marginTop: "20px" }}>
        Histórico de devoluciones
      </Typography>
      <Table columns={headerHistory} rows={feedbacks} pageSize={5} />
    </>
  ) : (
    <h1>Cargando...</h1>
  );
};

export default FeedbacksPage;
