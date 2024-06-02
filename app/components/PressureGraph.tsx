"use client"
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

function PressureGraph() {
  const chartRef = useRef<HTMLCanvasElement>(null); // Create a ref for the canvas element

  useEffect(() => {
    // Use the ref to access the canvas element
    const ctx = chartRef.current;

    if (ctx) {
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:30"],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133],
              label: "Pressure",
              borderColor: "#3e95cd",
              backgroundColor: "#7bb6dd",
              fill: false,
            },
            {
              data: [70, 90, 44, 60, 83, 90, 100],
              label: "Stat1",
              borderColor: "#3cba9f",
              backgroundColor: "#71d1bd",
              fill: false,
            },
            {
              data: [10, 21, 60, 44, 17, 21, 17],
              label: "Stat2",
              borderColor: "#ffa500",
              backgroundColor: "#ffc04d",
              fill: false,
            },
            
          ],
        },
      });
    }
  }, []);

  return (
    <>
      {/* line chart */}
      <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          {/* Use the ref to assign the canvas element */}
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </>
  );
}

export default PressureGraph;
