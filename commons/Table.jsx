import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const fakeColumns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
    headerClassName: "theme--header",
    headerAlign: "flex",
    sx: { paddingLeft: "5px" },
  },
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
    headerClassName: "theme--header",
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
    headerClassName: "theme--header",
  },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
    headerClassName: "theme--header",
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    headerClassName: "theme--header",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const fakeRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Table({
  columns = fakeColumns,
  rows = fakeRows,
  pageSize,
}) {
  return (
    <Box
      sx={{
        height: "100%",
        paddingLeft: "5px",
        "& .theme--header": {
          backgroundColor: "#E4E4E4",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          ...columns.initialState,
          pagination: { paginationModel: { pageSize: pageSize } },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  );
}
