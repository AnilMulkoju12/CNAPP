import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
const DoughnutGraph = ({
  backgroundColor,
  hoverbackgroundColor,
  dataSet,
  labels,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          data: dataSet,
          // backgroundColor:["#1babab","#ab1b1d","#41ab1b","#201bab"],
          backgroundColor: backgroundColor,
          // hoverbackgroundColor:["#1babab","#ab1b1d","#41ab1b","#201bab"]
          hoverbackgroundColor: hoverbackgroundColor,
          barThickness: 5,
        },
      ],
    };
    const ctx = ref.current.getContext("2d");
    const doughnutGraph = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        // cutoutPercentage: 30,
        cutout: '60%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              font: {
                size: 14,
              },
              usePointStyle: true,
              pointStyle: "rectRounded",
              boxWidth: 12,
              boxHeight: 12,
              padding: 10,
              boxBorderRadius: 10,
            },
          },
        },
        
      },
    });
    return () => {
      doughnutGraph.destroy();
    };
  }, []);
  
  return (
    <div style={{ width:"100%", height:"100%" }}>
      <canvas ref={ref} id="canvas"></canvas>
    </div>
  );
};

export default DoughnutGraph;
