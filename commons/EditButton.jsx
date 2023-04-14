const { Edit } = require("@mui/icons-material");
const { Tooltip, IconButton } = require("@mui/material");

const EditButton = ({ onClick, row }) => {
  return (
    <Tooltip title="Editar">
      <IconButton aria-label="edit" onClick={() => onClick(row)}>
        <Edit />
      </IconButton>
    </Tooltip>
  );
};

export default EditButton;
