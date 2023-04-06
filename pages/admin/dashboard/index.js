import React from "react";
import Dashboard from "../../../components/Dashboard";
import IsAdmin from "../../../commons/IsAdmin";

const index = () => {
  return (
    <IsAdmin>
      <Dashboard />
    </IsAdmin>
  );
};

export default index;
