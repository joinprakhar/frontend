import React from "react";
import { Bar } from "react-chartjs-2";
import { skillpoints } from "../../assets/data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
  Tooltip,
} from "chart.js";
const BarChart = (state) => {
  ChartJS.register(CategoryScale, LinearScale, Title, BarElement, Tooltip);
  const labels = skillpoints && skillpoints.map((ele) => ele?.name);
  const values = skillpoints.map((ele) => ele?.value);
  const backgroundColors = [
    "rgba(252, 186, 3,0.8)",
    "rgba(127, 0, 255,0.8)",
    "rgba(2, 146, 242,0.8)",
    "rgba(237, 21, 21,0.8)",
    "rgba(25, 163, 18,0.8)",
  ];

  // Ensure that if there are more labels than colors, the colors repeat
  const backgroundColor = Array.from(
    { length: labels.length },
    (_, index) => backgroundColors[index % backgroundColors.length]
  );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bar Chart",
        borderRadius: 10,
        borderWidth: 5,

        data: values,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
      }}
    />
  );
};
export default BarChart;
