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
  is3D: true,
  colors: ["#1369B4", "#FFD7CA", "#EBCDFF", "#FFECAB", "#CDEEDC"],
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
