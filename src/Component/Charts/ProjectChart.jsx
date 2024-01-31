import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { MiniProject, MajorProject } from "../../assets/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProjectChart = ({ state }) => {
  const data = {
    labels: ["Minor Project", "Major Project"],
    datasets: [
      {
        borderRadius: 0,
        borderWidth: 2,
        gap: 2,
        data: [MiniProject.length, MajorProject.length],
        backgroundColor: [
          "rgba(252, 186, 3,0.8)",
          "rgba(127, 0, 255,0.8)",
          //   "rgba(2, 146, 242,0.8)",
          //   "rgba(237, 21, 21,0.8)",
          //   "rgba(25, 163, 18,0.8)",
        ],
      },
    ],
  };
  return (
    <div style={{ width: "100%", height: "100%", paddingBottom: "15px" }}>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
};
