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
import { Popconfirm, Tag } from "antd";
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
      .delete(`/indicators/${indicator.id}`, {
        withCredentials: true,
      })
      .then(() => {
        customMessage("success", "Indicador Eliminado");
        setDeleteIndicator(false);
      })
      .catch((err) => customMessage("error", err.response.data));
  };

  useEffect(() => {
    axios
      .get("/categories/", { withCredentials: true })
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`/indicators/category/${selectedCategory.id}`, {
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
            <Edit onClick={() => toggleEditIndicatorModal(index.row)} />
          </IconButton>
          <IconButton aria-label="delete">
            <Popconfirm
              title="Borrar Indicador"
              description="Seguro que quiere borrar este Indicador?"
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
      <Container
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tag
          style={{
            borderRadius: 25,
            marginTop: "0.5rem",
            color: "#565659",
            backgroundColor: "#FFCDF4",
            borderColor: "#FFCDF4",
            maxHeight: "34px",
          }}
        >
          <Typography variant="h6">Indicadores</Typography>
        </Tag>
        <FormControl sx={{ width: "300px" }}>
          <InputLabel id="category-label">Seleccione una Categoría</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={selectedCategory.id}
            onChange={(e) => handleCategoryChange({ ...e.target.value })}
            label="Seleccione una Categoría"
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
          categories={categories}
        />
      </Container>
      <Table columns={headers} rows={indicators} pageSize={5} />
      <EditIndicatorModal
        open={editIndicatorModal}
        onClose={handleClose}
        indicator={selectedIndicator}
        categories={categories}
      />
    </>
  );
};

export default IndicatorsAdmin;
