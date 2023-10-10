import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import css from "./Chart.module.css";

const ChartComponent = ({ chartData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    const canvas = chartRef.current;
    if (canvas) {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      setCanvasDimensions({ width: canvas.width, height: canvas.height });
      
    }
  };

  useEffect(() => {
    if (!chartData || !chartData.labels || !chartData.datasets) {
      return null;
    }

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext("2d");

    if (myChartRef) {
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
          },
          cutout: '70%',
        },
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div style={{ position: "relative" }} className={css.diagramContainer}>
      <canvas ref={chartRef} style={{}}></canvas>
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
        <div style={{ fontSize: "18px", fontWeight: "700" }} className={css.diagramValue}>
          ₴ {chartData.accountBalance}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
