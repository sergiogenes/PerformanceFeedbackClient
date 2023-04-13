import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Puesto", "Porcentaje"],
  ["Operario", 50],
  ["Gerente", 10],
  ["Coordinador", 15],
  ["Gerente Regional", 3],
  ["Gerente General", 1],
];

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
