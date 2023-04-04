import React from "react";
import UserTable from "../../../commons/AdminTables/UserTable";
import { Navbar } from "../../../components/Navbar";

const users = () => {
  return <Navbar Component={UserTable} />;
};

export default users;
