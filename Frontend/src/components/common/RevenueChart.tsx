import { Line } from "react-chartjs-2"; // Assuming you're using chart.js
import "chart.js/auto"; // Make sure chart.js is installed
import { Link } from "react-router-dom";

export default function RevenueChart({ chartData }) {
  const bookingSorted = chartData.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  // Prepare data for the chart
  const xAxisData = bookingSorted.map((item) => item.date); // Extract dates for x-axis
  const seriesData = bookingSorted.map((item) => item.bookings); // Extract bookings for series data

  // Data structure for Chart.js
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "Bookings",
        data: seriesData,
        fill: false,
        backgroundColor: "#4ADE80", // Tailwind green-400
        borderColor: "#22C55E", // Tailwind green-500
        pointBackgroundColor: "#16A34A", // Tailwind green-600 for points
        tension: 0.4, // Curve the line
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151", // Tailwind gray-700
        },
      },
      tooltip: {
        backgroundColor: "#374151", // Tailwind gray-700
        titleColor: "#FFF", // White text for tooltip title
        bodyColor: "#D1D5DB", // Tailwind gray-300 for body text
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280", // Tailwind gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind gray-200 for grid lines
        },
      },
      y: {
        ticks: {
          color: "#6B7280", // Tailwind gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind gray-200
        },
      },
    },
  };

  return (
    <div className="bg-white border flex flex-col justify-center items-center p-6 border-gray-300 rounded-md shadow-lg space-y-6">
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Bookings Overview
        </h2>
        <div className="relative h-72 w-full">
          {" "}
          {/* Chart container with a fixed height */}
          <Line data={data} options={options} />
        </div>
      </div>
      <Link
        to={"/business/dashboard/report"}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
      >
        View Detailed Report
      </Link>
    </div>
  );
}
