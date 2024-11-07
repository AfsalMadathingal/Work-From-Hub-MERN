import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";

interface ChartData {
  date: string;
  bookings: number;
}

export default function RevenueChart({ chartData }: { chartData: ChartData[] }) {
  const sortedChartData = chartData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const xAxisData = sortedChartData.map((item) => item.date);
  const seriesData = sortedChartData.map((item) => item.bookings);

  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "Bookings",
        data: seriesData,
        fill: false,
        backgroundColor: "#4ADE80",
        borderColor: "#22C55E",
        pointBackgroundColor: "#16A34A",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#374151",
        },
      },
      tooltip: {
        backgroundColor: "#374151",
        titleColor: "#FFF",
        bodyColor: "#D1D5DB",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      y: {
        ticks: {
          color: "#6B7280",
        },
        grid: {
          color: "#E5E7EB",
        },
      },
    },
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 border flex flex-col justify-center items-center p-6 border-gray-300 dark:border-gray-700 rounded-md shadow-lg space-y-6"
    >
      <div className="w-full">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4 text-center">
          Bookings Overview
        </h2>
        <div className="relative h-72 w-full">
          <Line data={data} options={options} />
        </div>
      </div>
      <Link
        to={"/admin/dashboard/detailed-report"}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
      >
        View Detailed Report
      </Link>
    </div>
  );
}