import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tag } from "antd";
import { customMessage } from "../../../commons/CustomMessage/CustomMessage";
import { Typography, Button, Container } from "@mui/material";
import { Add } from "@mui/icons-material";
import AddCategoryModal from "../../../commons/AdminModals/AddCategoryModal";
import EditCategoryModal from "../../../commons/AdminModals/EditCategoryModal";
import IsAdmin from "../../../commons/IsAdmin";
import Table from "../../../commons/Table";
import EditButton from "../../../commons/EditButton";
import DeleteButton from "../../../commons/DeleteButton";

const CategoriesPage = () => {
  // States
  const [selectedCategory, setSelectedCategory] = useState({});
  const [categoryModal, setCategoryModal] = useState(false);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [refresh, setRefresh] = useState(false);
  // Togglers
  const toggleCategoryModal = () => {
    setCategoryModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  const toggleEditCategoryModal = (cat) => {
    setSelectedCategory(cat);
    setEditCategoryModal((prevState) => !prevState);
    setRefresh(!refresh);
  };
  // Handlers
  const alertConfirm = (cat) => {
    handleDeleteCategory(cat);
  };
  const alertCancel = () => {
    customMessage("info", "Acción cancelada");
  };
  const handleClose = () => {
    setSelectedCategory({});
    setEditCategoryModal(false);
    setRefresh(!refresh);
  };
  const handleDeleteCategory = async (cat) => {
    await axios
      .delete(`/categories/${cat.id}`, {
        withCredentials: true,
      })
      .then(() => {
        customMessage("success", "Categoría borrada");
        setRefresh(!refresh);
      })
      .catch((err) => customMessage("error", err.response.data));
  };
  // Effects
  useEffect(() => {
    axios
      .get("/categories", { withCredentials: true })
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, [refresh]);
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
      field: "name",
      headerName: "Nombre",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "competence",
      headerName: "Competencias",
      flex: 1,
      headerClassName: "theme--header",
    },
    {
      field: "function",
      headerName: "Función",
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
          <EditButton onClick={toggleEditCategoryModal} row={index.row} />
          <DeleteButton
            onConfirm={alertConfirm}
            row={index.row}
            onCancel={alertCancel}
          />
        </>
      ),
    },
  ];

  return (
    <IsAdmin>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.5rem",
        }}
      >
        <Tag
          style={{
            borderRadius: 25,
            marginTop: "0.5rem",
            color: "#565659",
            backgroundColor: "#CCE5FF",
            borderColor: "#CCE5FF",
            maxHeight: "34px",
          }}
        >
          <Typography variant="h6">Categorías</Typography>
        </Tag>
        <Button onClick={toggleCategoryModal}>
          Agregar Categoría
          <Add />
        </Button>
        <AddCategoryModal open={categoryModal} onClose={toggleCategoryModal} />
      </Container>
      <Table columns={headers} rows={categories} pageSize={5} />
      <EditCategoryModal
        open={editCategoryModal}
        onClose={handleClose}
        category={selectedCategory}
      />
    </IsAdmin>
  );
};

export default CategoriesPage;
