import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

const options = {
  title: "Porcentaje de Puestos",
  pieHole: 0.4,
  is3D: false,
  pieSliceText: "none",
  colors: [
    "#EBCDFF",
    "#CDEEDC",
    "#FFD7CA",
    "#FFECAB",
    "#1A86F7",
    "#1369B4",
    "#FB9B14",
  ],
};

export function PieChart() {
  // States
  const [data, setData] = useState([]);
  // Effects
  useEffect(() => {
    axios
      .get("/users/counts", { withCredentials: true })
      .then((res) => res.data)
      .then((positionCount) => {
        const newData = positionCount.map((elem) => [
          elem.position.name,
          Number(elem.count),
        ]);
        newData.unshift(["Puesto", "Porcentaje"]);
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
  );
}
