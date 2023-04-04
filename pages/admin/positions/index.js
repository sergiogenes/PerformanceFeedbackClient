import React from "react";
import PositionTable from "../../../commons/AdminTables/PositionTable";
import { Navbar } from "../../../components/Navbar";

const positions = () => {
  return <Navbar Component={PositionTable} />;
};

export default positions;
