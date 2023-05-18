import React, { useEffect, useState } from "react";
import axios from "axios";
import { Popconfirm } from "antd";
import { customMessage } from "../CustomMessage/CustomMessage";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import AddCategoryModal from "../AdminModals/AddCategoryModal";
import EditCategoryModal from "../AdminModals/EditCategoryModal";

const CategoryTable = () => {
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
      .then((res) => {
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

  return (
    <div
      style={{
        flexGrow: 1,
        padding: "2rem",
      }}
    >
      <Grid item xs={12} sm={9} md={12}>
        <div style={{ marginBottom: "2rem" }}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6">CATEGORIAS</Typography>
            <Button onClick={toggleCategoryModal}>
              Agregar Categoría
              <Add />
            </Button>
            <AddCategoryModal
              open={categoryModal}
              onClose={toggleCategoryModal}
            />
          </Container>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Categoría</TableCell>
                  <TableCell>Competencia</TableCell>
                  <TableCell>Función</TableCell>
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((cat) => (
                  <TableRow key={cat.name}>
                    <TableCell component="th" scope="cat">
                      {cat.id}
                    </TableCell>
                    <TableCell>{cat.name}</TableCell>
                    <TableCell>{cat.competence}</TableCell>
                    <TableCell>{cat.function}</TableCell>
                    <TableCell style={{ display: "flex" }}>
                      <IconButton
                        aria-label="edit"
                        onClick={() => toggleEditCategoryModal(cat)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <Popconfirm
                          title="Borrar Categoría"
                          description="Seguro que quiere borrar esta Categoría?"
                          onConfirm={() => alertConfirm(cat)}
                          onCancel={alertCancel}
                          okText="Sí"
                          cancelText="No"
                        >
                          <Delete />
                        </Popconfirm>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <EditCategoryModal
            open={editCategoryModal}
            onClose={handleClose}
            category={selectedCategory}
          />
        </div>
      </Grid>
    </div>
  );
};

export default CategoryTable;
