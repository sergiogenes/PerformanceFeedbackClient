import React from "react";
import UserTable from "../../../commons/AdminTables/UserTable";
import IsAdmin from "../../../commons/IsAdmin";

const users = () => {
  return (
    <IsAdmin>
      <UserTable />
    </IsAdmin>
  );
};

export default users;
