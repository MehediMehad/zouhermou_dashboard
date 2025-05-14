"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { TStat } from "./DashboardOverview";

Chart.register(...registerables);

export function LineChart({ stats }: { stats: TStat[] }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // আজকের তারিখ বের করো (local date অনুযায়ী)
    const today = new Date().getDate();
    console.log("🤢",today);
    

    // date string থেকে শুধু day number বের করে নিচ্ছি
    const labels = stats.map((item) => item.date.split("-")[1]); // ["01", "02", ..., "14"]
    const data = stats.map((item) => item.todayRegister);         // [0, 0, ..., 5]

    // যেহেতু stats এ আজকের আগ পর্যন্ত data আছে, তাই filter করার দরকার নাই
    // But safety purpose এ এইভাবে limit করা যায়:
    const filteredLabels = labels.slice(0, today);
    const filteredData = data.slice(0, today);

    // আগের chart থাকলে destroy করো
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: filteredLabels,
          datasets: [
            {
              label: "New Users",
              data: filteredData,
              borderColor: "#333",
              backgroundColor: "rgba(0, 0, 0, 0)",
              tension: 0.3,
              borderWidth: 1.5,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: "#f1f1f1",
              },
              ticks: {
                font: {
                  size: 10,
                },
                color: "#888",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                font: {
                  size: 10,
                },
                color: "#888",
              },
              grid: {
                color: "#f1f1f1",
              },
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stats]);

  return (
    <div className="h-[320px]">
      <canvas ref={chartRef} height="400"></canvas>
    </div>
  );
}
