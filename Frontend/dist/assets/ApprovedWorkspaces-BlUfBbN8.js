import { r as reactExports, j as jsxRuntimeExports, A as AnimatedPage, b7 as FaLocationArrow, L as Link, au as FaEye, b8 as FaEdit, b9 as FaTrash, ba as logout, y as _t, a as useDispatch, aW as setPageTitle } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-B6aHqGrp.js";
import { d as getApprovedWorkspaces } from "./BuserService-BN6O1gPT.js";
import { p as pagination_default } from "./chunk-MRXO6UUP-GcoclvP5.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
import "./BUserAuthService-DKSHJeo1.js";
import "./index-C--itkGG.js";
const BApprovedWorkspaces = () => {
  const [workspaces, setWorkspaces] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [limit] = reactExports.useState(5);
  reactExports.useEffect(() => {
    const fetchWorkspaces = async (page) => {
      try {
        const response = await getApprovedWorkspaces(page, limit);
        if ((response == null ? void 0 : response.status) === 200) {
          setWorkspaces(response.data.data.approvedWorkspaces);
          setTotalPages(response.data.data.totalPages);
        } else if ((response == null ? void 0 : response.status) === 401) {
          await logout();
          _t.error("Session expired");
        } else {
          _t.error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        _t.error("An error occurred while fetching workspaces");
      }
    };
    fetchWorkspaces(currentPage);
  }, [currentPage, limit]);
  const handleEdit = () => {
  };
  const getStatusStyles = (workspace) => {
    if (workspace.approved) return "bg-emerald-500";
    if (workspace.rejected) return "bg-red-500";
    return "bg-amber-500";
  };
  const getStatusText = (workspace) => {
    if (workspace.approved) return "Approved";
    if (workspace.rejected) return "Rejected";
    return "Pending";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-800", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg shadow dark:shadow-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200", children: "Building Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-800", children: workspaces.length ? workspaces.map((workspace) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300", children: workspace.buildingName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => window.open(`https://www.google.com/maps/search/${workspace.location}`, "_blank"),
            className: "inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaLocationArrow, { className: "h-4 w-4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusStyles(workspace)} dark:bg-gray-800`, children: getStatusText(workspace) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/business/workspace-view/${workspace._id}`,
              state: { workspace },
              className: "p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleEdit(),
              className: "p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors dark:bg-emerald-500 dark:hover:bg-emerald-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEdit, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => alert("Are you sure?"),
              className: "p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors dark:bg-red-500 dark:hover:bg-red-600",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, { className: "h-4 w-4" })
            }
          )
        ] }) })
      ] }, workspace._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400", children: "No workspaces found" }) }) })
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
  ] }) });
};
const ApprovedWorkspaces = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Approved Workspaces"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BApprovedWorkspaces, {}) }) }) });
};
export {
  ApprovedWorkspaces as default
};