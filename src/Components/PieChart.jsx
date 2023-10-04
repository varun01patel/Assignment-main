import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Correct answer", 11],
  ["Not answered", 2],
  ["Wrong", 2],
];

export const options = {
  colors: ["#235784", "#40A8C4", "#BCDBDF"], // Customize colors here
  height: 200, // Adjust the height here
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"} // Adjust the height here
    />
  );
}

export default PieChart;
