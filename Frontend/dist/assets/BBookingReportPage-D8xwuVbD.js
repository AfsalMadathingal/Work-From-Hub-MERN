import { r as reactExports, j as jsxRuntimeExports, aX as FaFilePdf, aY as FaFileExcel, aZ as E } from "./index-CTy2qHgP.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-fzO8EDL2.js";
import html2canvas from "./html2canvas.esm-Dtsxr8dG.js";
import { u as utils, w as writeFileSync } from "./xlsx-BSOddODG.js";
import { g as getDetailedReport } from "./BuserService-84KtDmbN.js";
import "tslib";
import "./Logout-9OedVr_p.js";
import "./Modal-mOoAhFB-.js";
import "./index-Dn0LtB1c.js";
import "./BUserAuthService-DMpVEy6B.js";
const BDetailedBookingsReport = () => {
  const [bookings, setBookings] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [filters, setFilters] = reactExports.useState({
    name: "",
    status: "",
    startDate: "",
    endDate: "",
    limit: 30
  });
  const generatePDF = () => {
    const reportElement = document.getElementById("report-content");
    if (!reportElement) {
      console.error("Report element not found");
      return;
    }
    html2canvas(reportElement ?? {}).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new E("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = canvas.height * pdfWidth / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("detailed-bookings-report.pdf");
    });
  };
  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(bookings);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Bookings");
    writeFileSync(workbook, "detailed-bookings-report.xlsx");
  };
  const fetchBookingsData = async () => {
    try {
      const query = new URLSearchParams({
        buildingName: filters.name,
        status: filters.status,
        startDate: filters.startDate,
        endDate: filters.endDate,
        limit: filters.limit.toString(),
        page: page.toString()
      });
      const response = await getDetailedReport(query);
      setBookings(response == null ? void 0 : response.data.data.bookings);
      setTotalPages(response == null ? void 0 : response.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchBookingsData();
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  reactExports.useEffect(() => {
    fetchBookingsData();
  }, [page]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-md shadow-md max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200", children: "Detailed Bookings Report" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mb-6 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Search by space Name",
          className: "border p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200",
          value: filters.name,
          onChange: (e) => setFilters({ ...filters, name: e.target.value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "border p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200",
          value: filters.status,
          onChange: (e) => setFilters({ ...filters, status: e.target.value }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "success", children: "Success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: "Failed" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "border p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200",
          value: filters.limit,
          onChange: (e) => setFilters({ ...filters, limit: Number(e.target.value) }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30", children: "Last 30 Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "7", children: "Last 7 Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "0", children: "Life Time" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          className: "border p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200",
          value: filters.startDate,
          onChange: (e) => setFilters({ ...filters, startDate: e.target.value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          className: "border p-2 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200",
          value: filters.endDate,
          onChange: (e) => setFilters({ ...filters, endDate: e.target.value })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition ease-in-out duration-300", children: "Submit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: "bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition ease-in-out duration-300",
          onClick: () => setFilters({ name: "", status: "", startDate: "", endDate: "", limit: 30 }),
          children: "Clear Filters"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "report-content", className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 uppercase text-sm leading-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-6 text-left", children: "Amount" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "text-gray-600 dark:text-gray-300 text-sm font-light", children: bookings.map((booking, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: booking.userId.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: booking.date.slice(0, 10) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `py-3 px-6 ${booking.status === "success" ? "text-green-500" : "text-red-500"}`, children: booking.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-6", children: booking.amount })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pagination flex items-center justify-center space-x-4 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handlePageChange(page - 1),
          disabled: page === 1,
          className: "bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition ease-in-out duration-300",
          children: "Previous"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600 dark:text-gray-300", children: [
        page,
        " of ",
        totalPages
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handlePageChange(page + 1),
          disabled: page === totalPages,
          className: "bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition ease-in-out duration-300",
          children: "Next"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: generatePDF, className: "bg-red-500 cursor-pointer flex items-center hover:bg-red-700 text-white py-2 px-6 rounded-md transition ease-in-out duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaFilePdf, {}),
        " Export to PDF"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: exportToExcel, className: "bg-green-500 cursor-pointer flex items-center hover:bg-green-700 text-white py-2 px-6 rounded-md transition ease-in-out duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaFileExcel, {}),
        " Export to Excel"
      ] })
    ] })
  ] });
};
const BBookingReportPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BDetailedBookingsReport, {}) }) }) });
};
export {
  BBookingReportPage as default
};
