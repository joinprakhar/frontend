import React from "react";
import { MiniProject, MajorProject } from "../../assets/data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const SkillWiseProject = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const getResult = (Arr1, Arr2) => {
    let combinedArr = Arr1.concat(Arr2);
    let result = {};
    combinedArr.forEach((item) => {
      let uniqueLetters = [...new Set(item.tech)]; // Extract unique letters from each key
      uniqueLetters.forEach((letter) => {
        result[letter] = (result[letter] || 0) + 1;
      });
    });
    let resultArray = Object.keys(result).map((letter) => ({
      [letter]: result[letter],
    }));
    return resultArray;
  };

  const dataChart = getResult(MiniProject, MajorProject);
  const labels = [];
  const dataValue = [];
  dataChart.forEach((ele) => {
    labels.push(...Object.keys(ele));
  });
  dataChart.forEach((ele) => {
    dataValue.push(...Object.values(ele));
  });

  const backgroundColors = [
    "rgba(252, 186, 3)",
    "rgba(128,0,128)",
    "rgba(2, 146, 242)",
    "rgba(237, 21, 21)",
    "rgba(25, 163, 18)",
  ];
  const backgroundColor = Array.from(
    { length: labels.length },
    (_, index) => backgroundColors[index % backgroundColors.length]
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Technology wise Project",
        data: dataValue,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line
        data={data}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
};

export default SkillWiseProject;
