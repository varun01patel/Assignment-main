import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const percentage = 59;

const CircularPie = () => (
  <div style={{ width: 50, height: 50 }}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      styles={{
        // Use custom styles to make the percentage text bold
        text: {
          fontWeight: "bold",
        },
      }}
    />
  </div>
);

export default CircularPie;
