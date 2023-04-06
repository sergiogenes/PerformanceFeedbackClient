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

/* export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3001/offices", {
    withCredentials: true,
  });
  const offices = response.data;
  console.log("offices", offices);
  return {
    props: {
      offices,
    },
  };
} */

export default offices;
