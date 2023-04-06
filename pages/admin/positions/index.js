import React from "react";
import PositionTable from "../../../commons/AdminTables/PositionTable";
import IsAdmin from "../../../commons/IsAdmin";

const positions = () => {
  return (
    <IsAdmin>
      <PositionTable />
    </IsAdmin>
  );
};

export default positions;
