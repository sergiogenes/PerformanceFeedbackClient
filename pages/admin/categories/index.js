import React from "react";
import { Navbar } from "../../../components/Navbar";
import CategoryTable from "../../../commons/AdminTables/CategoryTable";
const categories = () => {
  return <Navbar Component={CategoryTable} />;
};

export default categories;
