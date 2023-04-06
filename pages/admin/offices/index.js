import React from "react";
import OfficeTable from "../../../commons/AdminTables/OfficeTable";
import { Navbar } from "../../../components/Navbar";
import axios from "axios";

const offices = ({ offices }) => {
  return <Navbar Component={OfficeTable} offices={offices} />;
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
