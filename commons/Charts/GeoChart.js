import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";

const data = [
  ["País", "Oficinas"],
  ["Argentina", 5],
  ["Uruguay", 3],
  ["Colombia", 2],
  ["Peru", 2],
  ["Mexico", 3],
  ["United States", 1],
];

const options = {
  displayMode: "regions",
  resolution: "countries",
  zoomLevel: 5,
  colorAxis: { colors: ["#FFECAB", "#FFD7CA", "#FB9B14"] },
  backgroundColor: "#FFFFFF",
  datalessRegionColor: "#1369B4",
  defaultColor: "#FB9B14",
  keepAspectRatio: true,
  tooltip: { textStyle: { color: "#444444" }, showColorCode: true },
  enableRegionInteractivity: true,
  region: "019",
  center: { lat: 0, lng: -70 },
};

export function GeoChart() {
  // States
  const [offices, setOffices] = useState([]);
  // Effects
  useEffect(() => {
    axios
      .get("http://localhost:3001/offices", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
