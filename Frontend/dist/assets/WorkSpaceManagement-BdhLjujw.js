import { r as reactExports, j as jsxRuntimeExports, v as FaMapMarkerAlt, L as Link, au as FaEye, bO as getAllApprovedWorkspaces, ba as logout, y as _t, a as useDispatch, bB as setPageTitle } from "./index-CTy2qHgP.js";
import { R as ResponsiveDrawer } from "./AdminLayout-C1017qFS.js";
import "tslib";
import "./Logout-9OedVr_p.js";
import "./Modal-mOoAhFB-.js";
import "./index-Dn0LtB1c.js";
const ApprovedWorkspaces = () => {
  const [workspaces, setWorkspaces] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [limit] = reactExports.useState(5);
  reactExports.useEffect(() => {
    const fetchWorkspaces = async (page, limit2) => {
      try {
        const response = await getAllApprovedWorkspaces(page, limit2);
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
        console.error("Error fetching workspaces:", error);
        _t.error("An error occurred while fetching workspaces");
      }
    };
    fetchWorkspaces(currentPage, limit);
  }, [currentPage, limit]);
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto py-10 px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-md font-bold mb-2", children: "Approved Workspaces" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full table-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 dark:bg-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Building Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-gray-600", children: workspaces.map((workspace) => {
        var _a, _b;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "h-16 w-16 object-cover rounded",
              src: ((_b = (_a = workspace == null ? void 0 : workspace.photos) == null ? void 0 : _a[0]) == null ? void 0 : _b.toString()) || "https://picsum.photos/200/300",
              alt: workspace.buildingName
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white", children: workspace.buildingName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              className: "flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-md transition-colors",
              onClick: () => {
                const url = `https://www.google.com/maps/search/?api=1&query=${workspace.location}`;
                window.open(url, "_blank");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FaMapMarkerAlt, { className: "mr-2" }),
                " Open in Google Maps"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/admin/workspace-view/${workspace._id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center justify-center bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaEye, { className: "mr-2" }),
            " View"
          ] }) }) })
        ] }, workspace._id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center mt-8 space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleChangePage(currentPage - 1),
          disabled: currentPage === 1,
          className: `px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"} transition-colors`,
          children: "Previous"
        }
      ),
      Array.from({ length: totalPages }, (_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleChangePage(index + 1),
          className: `px-4 py-2 rounded-md transition-colors ${currentPage === index + 1 ? "bg-orange-500 dark:bg-orange-600 text-white" : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"}`,
          children: index + 1
        },
        index
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => handleChangePage(currentPage + 1),
          disabled: currentPage === totalPages,
          className: `px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"} transition-colors`,
          children: "Next"
        }
      )
    ] })
  ] });
};
const WorkspaceManagement = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Workspace Management"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(ApprovedWorkspaces, {}) }) }) });
};
export {
  WorkspaceManagement as default
};
