import { b as reactExports, j as jsxRuntimeExports, L as Link, _ as _t, a as useDispatch, K as setPageTitle } from "./index-CRCdbRYf.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-1i5_bWXy.js";
import { s as FaLocationArrow, l as FaEye, B as FaEdit, C as FaTrash } from "./index-DiJo3T71.js";
import { d as getAllWorkspaces } from "./BuserService-BTKhPjcw.js";
import { l as logout } from "./adminAuth-CQK_s7r4.js";
import { n as notify } from "./NotificationService-DlsDu61j.js";
import "./Logout-BI18FvRh.js";
import "./clsx-DgYk2OaC.js";
import "./Modal-DBUlL1Mq.js";
import "./index-CrzzP1Ob.js";
import "./iconBase-CZo89hZi.js";
import "./colors-BHzic30Z.js";
import "./BUserAuthService-DL4tNSdu.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./createLucideIcon-I0cbKwv6.js";
const WorkspaceListing = () => {
  const [workspaces, setWorkspaces] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [limit] = reactExports.useState(5);
  const [activeFilter, setActiveFilter] = reactExports.useState("all");
  const [filteredWorkspaces, setFilteredWorkspaces] = reactExports.useState([]);
  const handleViewReason = async (workspace) => {
    notify.info(`Reason: ${workspace.rejectionReason}`);
  };
  reactExports.useEffect(() => {
    const fetchWorkspaces = async (page) => {
      try {
        const response = await getAllWorkspaces(page, limit);
        if ((response == null ? void 0 : response.status) === 200) {
          setWorkspaces(response.data.data);
          setTotalPages(response.data.data.totalPages);
        } else if ((response == null ? void 0 : response.status) === 401) {
          await logout();
          _t.error("Session expired");
        }
      } catch (error) {
        console.error("Error fetching workspaces:", error);
        _t.error("Failed to fetch workspaces");
      }
    };
    fetchWorkspaces(currentPage);
  }, [currentPage, limit]);
  reactExports.useEffect(() => {
    const filterWorkspaces = () => {
      let filtered = [...workspaces];
      switch (activeFilter) {
        case "pending":
          filtered = workspaces.filter((w) => !w.approved && !w.rejected);
          break;
        case "approved":
          filtered = workspaces.filter((w) => w.approved);
          break;
        case "rejected":
          filtered = workspaces.filter((w) => w.rejected);
          break;
      }
      setFilteredWorkspaces(filtered);
    };
    filterWorkspaces();
  }, [workspaces, activeFilter]);
  const getStatusBadgeClass = (workspace) => {
    if (workspace.approved) return "bg-green-500 dark:bg-green-600";
    if (workspace.rejected) return "bg-red-500 dark:bg-red-600";
    return "bg-yellow-500 dark:bg-yellow-600";
  };
  const getStatusText = (workspace) => {
    if (workspace.approved) return "Approved";
    if (workspace.rejected) return "Rejected";
    return "Pending";
  };
  const FilterButton = ({ status, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => setActiveFilter(status),
      className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
        ${activeFilter === status ? "bg-blue-500 text-white shadow-sm" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`,
      children: label
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "all", label: "All Workspaces" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "pending", label: "Pending" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "approved", label: "Approved" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterButton, { status: "rejected", label: "Rejected" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Building Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Status" }),
        activeFilter === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Rejection Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700", children: filteredWorkspaces.length > 0 ? filteredWorkspaces.map((workspace) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100", children: workspace.buildingName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: workspace.location }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                FaLocationArrow,
                {
                  className: "text-blue-500 hover:text-blue-600 cursor-pointer",
                  onClick: () => window.open(
                    `https://www.google.com/maps/search/${workspace.location}`,
                    "_blank"
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white
                          ${getStatusBadgeClass(workspace)}`, children: getStatusText(workspace) }) }),
            activeFilter === "rejected" && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleViewReason(workspace),
                className: "text-blue-500 hover:text-blue-600",
                children: "View Reason"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end space-x-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: `/business/workspace-view/${workspace._id}`,
                  state: { workspace },
                  className: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-gray-400 hover:text-gray-500 dark:hover:text-gray-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaEdit, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-red-400 hover:text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaTrash, { className: "w-5 h-5" }) })
            ] }) })
          ]
        },
        workspace._id
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "td",
        {
          colSpan: 4,
          className: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400",
          children: [
            "No ",
            activeFilter !== "all" ? activeFilter : "",
            " workspaces found"
          ]
        }
      ) }) })
    ] }) }) }),
    totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex items-center space-x-2", children: Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCurrentPage(page),
        className: `px-3 py-1 rounded-md text-sm font-medium
                    ${currentPage === page ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"}`,
        children: page
      },
      page
    )) }) })
  ] }) });
};
const BWorkspaceSubmissions = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Workspace Submission"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceListing, {}) }) }) });
};
export {
  BWorkspaceSubmissions as default
};
