import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 39;

const CircularPie2 = () => (
  <div style={{ width: 50, height: 50 }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={buildStyles({
        // Customize the color of the progress bar
        pathColor: "red",
        textColor: "black",
         // Change the text color if needed
      })}
    />
  </div>
);

export default CircularPie2;
