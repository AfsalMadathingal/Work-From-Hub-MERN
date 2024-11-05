import { r as reactExports, a as useDispatch, bF as getAllPendingSubmission, ba as logout, y as _t, j as jsxRuntimeExports, b7 as FaLocationArrow, L as Link, au as FaEye, b8 as FaEdit, bG as setModal, bB as setPageTitle } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./AdminLayout-xTK5qiL4.js";
import { p as pagination_default } from "./chunk-MRXO6UUP-GcoclvP5.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
import "./index-C--itkGG.js";
const WorkspaceSubmissionTable = () => {
  const [workspaces, setWorkspaces] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [limit] = reactExports.useState(5);
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);
  const fetchWorkspaces = async (page) => {
    try {
      const response = await getAllPendingSubmission(page, limit);
      if ((response == null ? void 0 : response.status) === 200) {
        setWorkspaces(response.data.data.pendingSubmissions);
        setTotalPages(response.data.data.totalPages);
      } else if ((response == null ? void 0 : response.status) === 401) {
        await logout();
        _t.error("Session expired");
      } else {
        _t.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching workspaces:", error);
      _t.error("An error occurred while fetching workspaces");
    }
  };
  const handleEdit = (workspace) => {
    dispatch(setModal({ type: "edit", data: workspace }));
  };
  const getStatusStyles = (workspace) => {
    if (workspace.approved) return "bg-emerald-500 dark:bg-emerald-600";
    if (workspace.rejected) return "bg-red-500 dark:bg-red-600";
    return "bg-amber-500 dark:bg-amber-600";
  };
  const filteredWorkspaces = workspaces.filter((workspace) => {
    if (activeFilter === "pending") return !workspace.approved && !workspace.rejected;
    if (activeFilter === "rejected") return workspace.rejected;
    return true;
  });
  const FilterButton = ({ status, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => setActiveFilter(status),
      className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 
        ${activeFilter === status ? "bg-blue-600 dark:bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`,
      children: label
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "all", label: "All" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "pending", label: "Pending" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "rejected", label: "Rejected" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Building Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { scope: "col", className: "px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700", children: filteredWorkspaces.length ? filteredWorkspaces.map((workspace) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100", children: workspace.buildingName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: workspace.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => window.open(`https://www.google.com/maps/search/${workspace.location}`, "_blank"),
              className: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLocationArrow, { className: "h-4 w-4" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2.5 py-1 text-xs font-semibold rounded-full text-white ${getStatusStyles(workspace)}`, children: workspace.approved ? "Approved" : workspace.rejected ? "Rejected" : "Pending" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/admin/workspace-view/${workspace._id}`,
              state: { workspace },
              className: "inline-flex items-center p-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleEdit(workspace),
              className: "inline-flex items-center p-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 shadow-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEdit, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, workspace._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 4, className: "px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800", children: [
        "No ",
        activeFilter !== "all" ? activeFilter : "",
        " submissions found."
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      pagination_default,
      {
        color: "warning",
        total: totalPages,
        initialPage: currentPage,
        onChange: setCurrentPage
      }
    ) })
  ] });
};
const WorkspaceSubmission = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Workspace Submission"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceSubmissionTable, {}) }) }) });
};
export {
  WorkspaceSubmission as default
};
