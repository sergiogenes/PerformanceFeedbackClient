import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Popconfirm } from "antd";
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

const teamData = [
  { name: "John Doe", position: "Manager", email: "johndoe@example.com" },
  { name: "Jane Smith", position: "Developer", email: "janesmith@example.com" },
  {
    name: "Bob Johnson",
    position: "Designer",
    email: "bobjohnson@example.com",
  },
];

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
  };
  // Handlers
  const alertConfirm = (cat) => {
    console.log("CATEGORIA A BORRAR:", cat);
  };
  const alertCancel = () => {
    message.info("Acción cancelada");
  };
  const handleClose = () => {
    setSelectedCategory({});
    setEditCategoryModal(false);
  };
  const handleDeleteCategory = (cat) => {
    console.log(cat);
    // axios
    //   .delete(`http://localhost:3001/positions/${cat.id}`, {
    //     withCredentials: true,
    //   })
    //   .then((response) => {
    //     message.success(response.data);
    //     setRefresh(!refresh);
    //   })
    //   .catch((error) => message.error(error.message));
  };
  // Effects
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3001/category?", { withCredentials: true })
  //       .then((response) => setCategories(response.data))
  //       .catch((error) => console.log(error));
  //   }, [refresh]);

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
                  <TableCell>ACCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamData.map((cat) => (
                  <TableRow key={cat.name}>
                    <TableCell component="th" scope="cat">
                      {cat.id}
                    </TableCell>
                    <TableCell>{cat.name}</TableCell>
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
