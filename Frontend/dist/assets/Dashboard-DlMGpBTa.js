import { j as jsxRuntimeExports, L as Link, k as React, b as reactExports, _ as _t } from "./index-BgyoVvld.js";
import { R as ResponsiveDrawer } from "./AdminLayout-BQAs6xey.js";
import { L as Line } from "./auto-Dt0TWExQ.js";
import { u as user_default, t as table_default, a as table_header_default, b as table_column_default, c as table_body_default, d as table_row_default, e as table_cell_default } from "./chunk-YRZGWF2W-CE1GT2rg.js";
import { g as getDashboardData } from "./AdminRouter-C0QqS4Ui.js";
import "./Logout-D0QFIkxM.js";
import "./clsx-DgYk2OaC.js";
import "./Modal-C-CzRshO.js";
import "./index-JtRx5LEO.js";
import "./iconBase-b0mU4BcV.js";
import "./colors-w8IeHXqN.js";
import "./index-CBXuPOJf.js";
import "./adminAuth-DQebXDMS.js";
import "./index-Bxisd2S8.js";
import "./useFocusRing-D2Xc8JP6.js";
import "./chunk-XHQUSKIE-kpJhvuYQ.js";
import "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import "./chunk-QXREVWCS-Dw8VqDq0.js";
import "./index-D2hLiIF9.js";
import "./index-CFMAwm7M.js";
import "./getChildNodes-ei8c2tXI.js";
import "./useFocusable-BHKaAMEV.js";
import "./useControlledState-chsM3Wdo.js";
import "./chunk-RFUEKIFS-5kmiI8xu.js";
import "./LiveAnnouncer-D5Rj6zce.js";
import "./chunk-IXXDDLGU-CnNsE2GD.js";
const SummaryCard = ({ icon, label, value }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-indigo-100 dark:bg-gray-700 p-4 rounded-md shadow-md dark:shadow-none flex items-center space-x-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl text-indigo-600 dark:text-indigo-400", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-indigo-800 dark:text-indigo-500", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-indigo-600 dark:text-indigo-400", children: label })
    ] })
  ] });
};
const Summary = ({ summaryData }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: "👤", label: "Total Users", value: summaryData.userCount }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: "🏢", label: "Workspaces", value: summaryData.workspaceCount }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: "📅", label: "Total Bookings", value: summaryData.bookingCount }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { icon: "💰", label: "Total Revenue", value: `₹${summaryData.totalRevenue}` })
  ] });
};
const SummaryStatics = ({ summaryData }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg dark:shadow-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Summary, { summaryData }) });
};
function RevenueChart({ chartData }) {
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
        tension: 0.4
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
        }
      },
      tooltip: {
        backgroundColor: "#374151",
        titleColor: "#FFF",
        bodyColor: "#D1D5DB"
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280"
        },
        grid: {
          color: "#E5E7EB"
        }
      },
      y: {
        ticks: {
          color: "#6B7280"
        },
        grid: {
          color: "#E5E7EB"
        }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-white dark:bg-gray-800 border flex flex-col justify-center items-center p-6 border-gray-300 dark:border-gray-700 rounded-md shadow-lg space-y-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-700 dark:text-gray-200 mb-4 text-center", children: "Bookings Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-72 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { data, options }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/admin/dashboard/detailed-report",
            className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300",
            children: "View Detailed Report"
          }
        )
      ]
    }
  );
}
const NewUsers = ({ newUsersData }) => {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "fullName":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          user_default,
          {
            avatarProps: { radius: "lg", src: item.profilePic },
            description: "",
            name: item.fullName,
            children: [
              "",
              " // You might want to add a default value or handle this case differently"
            ]
          }
        );
      case "createdAt":
        return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: item.createdAt.slice(0, 10) });
      default:
        return cellValue;
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-6  rounded-md shadow-md mb-8 dark:shadow-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold mb-4 dark:text-gray-200", children: "New Users" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(table_default, { "aria-label": "Example table with custom cells", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(table_header_default, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(table_column_default, { children: "Name" }, "fullName"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(table_column_default, { children: "Creation Date" }, "createdAt")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(table_body_default, { items: newUsersData, children: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(table_row_default, { children: (columnKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(table_cell_default, { children: renderCell(item, columnKey) }) }, item._id) })
    ] })
  ] });
};
const RecentBookings = ({ recentBookings }) => {
  const bookingSorted = recentBookings.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-100  dark:bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-700 dark:text-gray-200 mb-6 text-center", children: "Recent Bookings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-sm leading-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Workspace ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "text-gray-600 dark:text-gray-300 text-sm font-light", children: bookingSorted.map((booking, index) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: (_a = booking.userId) == null ? void 0 : _a.fullName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: booking.workspaceId }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: booking.date.slice(0, 10) })
        ] }, index);
      }) })
    ] }) })
  ] });
};
const Dashboard = () => {
  const [summaryData, setSummaryData] = reactExports.useState({
    userCount: 0,
    workspaceCount: 0,
    bookingCount: 0,
    totalRevenue: 0
  });
  const [newUsers, setNewUsers] = reactExports.useState([]);
  const [recentBookings, setRecentBookings] = reactExports.useState([]);
  const [chartData, setChartData] = reactExports.useState([{
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    bookings: 0
  }]);
  const fetchDashboardData = async () => {
    var _a, _b, _c, _d;
    try {
      const response = await getDashboardData();
      const data = response == null ? void 0 : response.data.data;
      const summary = { bookingCount: 0, userCount: 0, workspaceCount: 0, totalRevenue: 0 };
      summary.bookingCount = (_a = data == null ? void 0 : data.bookingData) == null ? void 0 : _a.bookingsCount;
      summary.userCount = (_b = data == null ? void 0 : data.userData) == null ? void 0 : _b.userCount;
      summary.workspaceCount = data == null ? void 0 : data.workspaceData;
      summary.totalRevenue = (_c = data == null ? void 0 : data.bookingData) == null ? void 0 : _c.bookingsData.reduce(
        (total, booking) => total + booking.amount,
        0
      );
      const lastSevenBookings = data.lastSevenBookings;
      setRecentBookings(lastSevenBookings);
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
      const groupedBookings = lastSevenBookings.reduce((acc, booking) => {
        const date = new Date(booking.date).toISOString().split("T")[0];
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
      setNewUsers((_d = data == null ? void 0 : data.userData) == null ? void 0 : _d.users);
      setSummaryData(summary);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid  mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(NewUsers, { newUsersData: newUsers }) }) })
  ] });
};
const AdminDashboard = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) }) }) });
};
export {
  AdminDashboard as default
};
