import { Popconfirm } from "antd";
const { Delete } = require("@mui/icons-material");
const { Tooltip, IconButton } = require("@mui/material");

const DeactivateButton = ({ onConfirm, row, onCancel }) => {
  return (
    <Tooltip title="Desactivar">
      <IconButton aria-label="delete">
        <Popconfirm
          title="Desactivar Usuario"
          description="Seguro que quiere desactivar el usuario?"
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

export default DeactivateButton;
