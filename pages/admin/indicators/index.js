import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Container,
  IconButton,
} from "@mui/material";
import { Popconfirm } from "antd";
import { Add, Edit, Delete } from "@mui/icons-material";
import Table from "../../../commons/Table";
import AddIndicatorModal from "../../../commons/AdminModals/AddIndicatorModal";
import EditIndicatorModal from "../../../commons/AdminModals/EditIndicatorModal";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";

const IndicatorsAdmin = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [indicators, setIndicators] = useState([]);
  const [indicatorModal, setIndicatorModal] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState({});
  const [editIndicatorModal, setEditIndicatorModal] = useState(false);
  const [deleteIndicator, setDeleteIndicator] = useState(false);

  const toggleIndicatorModal = () => {
    setIndicatorModal((prevState) => !prevState);
  };
  const toggleEditIndicatorModal = (indicator) => {
    setSelectedIndicator(indicator);
    setEditIndicatorModal((prevState) => !prevState);
  };

  const handleClose = () => {
    setSelectedIndicator({});
    setEditIndicatorModal(false);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const alertConfirm = (indicator) => {
    setDeleteIndicator((prevState) => !prevState);
    handleDeleteIndicator(indicator);
  };
  const alertCancel = () => {
    customMessage("info", "Acción cancelada");
  };
  const handleDeleteIndicator = async (indicator) => {
    await axios
      .delete(`http://localhost:3001/indicators/${indicator.id}`, {
        withCredentials: true,
      })
      .then((res) => {
        customMessage("success", "Indicador Eliminado");
        setDeleteIndicator(false);
      })
      .catch((err) => customMessage("error", err.response.data));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/categories/", { withCredentials: true })
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/indicators/category/${selectedCategory.id}`, {
        withCredentials: true,
      })
      .then((response) => response.data)
      .then((indicators) => setIndicators(indicators))
      .catch((error) => customMessage(error.message));
  }, [selectedCategory, indicatorModal, editIndicatorModal, deleteIndicator]);

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
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      type: "number",
      headerClassName: "theme--header",
      renderCell: (index) => (
        <>
          <IconButton aria-label="edit">
            <Edit onClick={(e) => toggleEditIndicatorModal(index.row)} />
          </IconButton>
          <IconButton aria-label="delete">
            <Popconfirm
              title="Borrar Categoría"
              description="Seguro que quiere borrar esta Categoría?"
              onConfirm={() => alertConfirm(index.row)}
              onCancel={alertCancel}
              okText="Sí"
              cancelText="No"
            >
              <Delete />
            </Popconfirm>
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ marginLeft: "10px" }}>
        Indicadores
      </Typography>
      <Container
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="category-label">Categoría</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory.id}
            onChange={(e) => handleCategoryChange({ ...e.target.value })}
            label="Categoría"
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat}>
                {cat.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={toggleIndicatorModal}>
          Agregar Indicador
          <Add />
        </Button>
        <AddIndicatorModal
          open={indicatorModal}
          onClose={toggleIndicatorModal}
          category={selectedCategory}
        />
      </Container>
      <Table columns={headers} rows={indicators} pageSize={5} />
      <EditIndicatorModal
        open={editIndicatorModal}
        onClose={handleClose}
        indicator={selectedIndicator}
        category={selectedCategory}
      />
    </>
  );
};

export default IndicatorsAdmin;
