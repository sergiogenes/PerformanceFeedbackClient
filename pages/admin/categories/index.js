import React from "react";
import CategoryTable from "../../../commons/AdminTables/CategoryTable";
import IsAdmin from "../../../commons/IsAdmin";

const categories = () => {
  return (
    <IsAdmin>
      <CategoryTable />
    </IsAdmin>
  );
};

export default categories;
