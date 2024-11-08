import { j as jsxRuntimeExports, L as Link, u as useSelector, a as useDispatch, r as reactExports, b8 as setLoading, b9 as getDataForDashboard, y as _t, b0 as setPageTitle, b1 as ResponsiveDrawer } from "./index-DhlojAJa.js";
import { L as Line } from "./auto-DQRYTdjZ.js";
const SummaryCard = ({ icon, label, value }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !value ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-100 dark:bg-gray-700 p-4 rounded-md shadow-md flex items-center space-x-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-indigo-200 dark:bg-gray-600 rounded-full animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-indigo-200 dark:bg-gray-600 rounded w-1/3 animate-pulse mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-indigo-200 dark:bg-gray-600 rounded w-1/2 animate-pulse" })
    ] })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-100 dark:bg-gray-700 p-4 rounded-md shadow-md flex items-center space-x-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-indigo-600 dark:text-indigo-400", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-indigo-800 dark:text-indigo-400", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-indigo-600 dark:text-indigo-400", children: label })
    ] })
  ] }) });
};
const Summary = ({ summaryData }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SummaryCard,
      {
        icon: "🏢",
        label: "Workspaces",
        value: summaryData.workspaceCount
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SummaryCard,
      {
        icon: "📅",
        label: "Total Bookings",
        value: summaryData.bookingCount
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SummaryCard,
      {
        icon: "💰",
        label: "Total Revenue",
        value: summaryData.totalRevenue
      }
    )
  ] });
};
const SummaryStatics = ({ summaryData }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { summaryData }) });
};
function RevenueChart({ chartData }) {
  console.log(chartData);
  const bookingSorted = chartData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const xAxisData = bookingSorted.map((item) => item.date);
  const seriesData = bookingSorted.map((item) => item.bookings);
  const data = {
    labels: xAxisData,
    datasets: [
      {
        label: "Bookings",
        data: seriesData,
        fill: false,
        backgroundColor: "#4ADE80",
        // Tailwind green-400
        borderColor: "#22C55E",
        // Tailwind green-500
        pointBackgroundColor: "#16A34A",
        // Tailwind green-600 for points
        tension: 0.4
        // Curve the line
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151"
          // Tailwind gray-700
        }
      },
      tooltip: {
        backgroundColor: "#374151",
        // Tailwind gray-700
        titleColor: "#FFF",
        // White text for tooltip title
        bodyColor: "#D1D5DB"
        // Tailwind gray-300 for body text
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280"
          // Tailwind gray-500
        },
        grid: {
          color: "#E5E7EB"
          // Tailwind gray-200 for grid lines
        }
      },
      y: {
        ticks: {
          color: "#6B7280"
          // Tailwind gray-500
        },
        grid: {
          color: "#E5E7EB"
          // Tailwind gray-200
        }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 border flex flex-col justify-center items-center p-6 border-gray-300 dark:border-gray-700 rounded-md shadow-lg space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-700 dark:text-gray-300 mb-4 text-center", children: "Bookings Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-72 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { data, options }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/business/dashboard/report",
        className: "bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-800 text-white font-bold py-2 px-6 rounded-md transition duration-300",
        children: "View Detailed Report"
      }
    )
  ] });
}
const RecentBookings = ({ recentBookings }) => {
  const { loading } = useSelector((state) => state.businessUser);
  const dispatch = useDispatch();
  const bookingSorted = recentBookings.sort((a, b) => {
    var _a, _b;
    return new Date((_a = b.date) == null ? void 0 : _a.toString()).getTime() - new Date((_b = a.date) == null ? void 0 : _b.toString()).getTime();
  });
  reactExports.useEffect(() => {
    const loadingData = async () => {
      dispatch(setLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 300));
      dispatch(setLoading(false));
    };
    loadingData();
  }, [dispatch]);
  const TableStructure = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-800 dark:text-gray-200 p-6 border-b border-gray-200 dark:border-gray-700", children: "Recent Bookings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Workspace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Date" })
      ] }) }),
      children
    ] }) })
  ] });
  const LoadingSkeleton = () => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: [...Array(5)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "animate-pulse bg-white dark:bg-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3" }) })
  ] }, index)) });
  const BookingData = () => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: bookingSorted.map((booking, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "tr",
    {
      className: "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: booking.userInfo[0].fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: booking.workspaceInfo.buildingName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300", children: booking.date.slice(0, 10) })
      ]
    },
    index
  )) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableStructure, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(BookingData, {}) }) });
};
const BUserDashboard = () => {
  const [summaryData, setSummaryData] = reactExports.useState({});
  const [recentBookings, setRecentBookings] = reactExports.useState([]);
  const [chartData, setChartData] = reactExports.useState([
    {
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      bookings: 0
    }
  ]);
  const fetchDashboardData = async () => {
    var _a, _b;
    try {
      const response = await getDataForDashboard();
      const data = response == null ? void 0 : response.data.data;
      const summary = { bookingCount: 0, userCount: 0, workspaceCount: 0, totalRevenue: 0 };
      summary.bookingCount = (_a = data == null ? void 0 : data.countBooking) == null ? void 0 : _a.count;
      summary.workspaceCount = data == null ? void 0 : data.workspaceData.length;
      summary.totalRevenue = (_b = data == null ? void 0 : data.bookingData) == null ? void 0 : _b.reduce(
        (total, booking) => total + booking.amount,
        0
      );
      setRecentBookings(data.bookingData);
      const getLastSevenDays = () => {
        const days = [];
        const today = /* @__PURE__ */ new Date();
        for (let i = 0; i < 7; i++) {
          const date = /* @__PURE__ */ new Date();
          date.setDate(today.getDate() - i);
          days.push(date.toISOString().split("T")[0]);
        }
        return days;
      };
      const groupedBookings = data.bookingData.reduce((acc, booking) => {
        const date = new Date(booking.createdAt).toISOString().split("T")[0];
        if (!acc[date]) {
          acc[date] = { date, bookings: 1 };
        } else {
          acc[date].bookings += 1;
        }
        return acc;
      }, {});
      const lastSevenDays = getLastSevenDays();
      const finalResult = lastSevenDays.map((date) => {
        return groupedBookings[date] || { date, bookings: 0 };
      });
      setChartData(finalResult);
      setSummaryData(summary);
    } catch (error) {
      console.log(error);
      _t.error("Something went wrong");
    }
  };
  reactExports.useEffect(() => {
    fetchDashboardData();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1 bg-gray-100 dark:bg-gray-800 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryStatics, { summaryData }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RevenueChart, { chartData }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(RecentBookings, { recentBookings })
    ] })
  ] });
};
const BUserDashBoard = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Dashboard"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BUserDashboard, {}) }) }) });
};
export {
  BUserDashBoard as default
};
