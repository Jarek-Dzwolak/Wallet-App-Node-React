import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          cutout: "70%",
        },
      },
    });

    const canvasWidth = chartRef.current.width;
    const canvasHeight = chartRef.current.height;

    setCanvasDimensions({ width: canvasWidth, height: canvasHeight });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={chartRef}></canvas>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          color: "#000",
        }}
      >
        <div style={{ fontSize: "10px", fontWeight: "bold" }}>
          Saldo konta: {chartData.accountBalance} PLN
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
