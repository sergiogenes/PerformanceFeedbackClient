import React from "react";
import OfficeTable from "../../../commons/AdminTables/OfficeTable";
import IsAdmin from "../../../commons/IsAdmin";

const offices = () => {
  return (
    <IsAdmin>
      <OfficeTable />
    </IsAdmin>
  );
};

export default offices;
