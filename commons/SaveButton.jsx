const { Save } = require("@mui/icons-material");
const { Tooltip, IconButton } = require("@mui/material");

const SaveButton = ({ onClick, row }) => {
  return (
    <Tooltip title="Guardar">
      <IconButton aria-label="edit" onClick={() => onClick(row)}>
        <Save />
      </IconButton>
    </Tooltip>
  );
};

export default SaveButton;
