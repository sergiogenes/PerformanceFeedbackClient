import { Popconfirm } from "antd";
const { Delete } = require("@mui/icons-material");
const { Tooltip, IconButton } = require("@mui/material");

const DeleteButton = ({ onConfirm, row, onCancel }) => {
  return (
    <Tooltip title="Eliminar">
      <IconButton aria-label="delete">
        <Popconfirm
          title="Eliminar"
          description="Seguro que quiere eliminar?"
          onConfirm={() => onConfirm(row)}
          onCancel={onCancel}
          okText="Sí"
          cancelText="No"
        >
          <Delete />
        </Popconfirm>
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
