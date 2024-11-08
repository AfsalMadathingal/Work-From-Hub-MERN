import { b as reactExports, j as jsxRuntimeExports, _ as _t, a as useDispatch, K as setPageTitle } from "./index-BgyoVvld.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-Ca3QZn1A.js";
import { s as FaLocationArrow } from "./index-CBXuPOJf.js";
import { l as logout } from "./adminAuth-DQebXDMS.js";
import { A as AnimatedPage } from "./Animation-eGCpIPZ_.js";
import { g as getApprovedWorkspaces, m as manageHolding } from "./BuserService-kHRcvCRa.js";
import { p as pagination_default } from "./chunk-MRXO6UUP-BD19CaN0.js";
import "./Logout-D0QFIkxM.js";
import "./clsx-DgYk2OaC.js";
import "./Modal-C-CzRshO.js";
import "./index-JtRx5LEO.js";
import "./iconBase-b0mU4BcV.js";
import "./colors-w8IeHXqN.js";
import "./BUserAuthService-DL4tNSdu.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./createLucideIcon-aT5HAUZt.js";
import "./create-visual-element-Bp75OA0n.js";
import "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import "./chunk-XHQUSKIE-kpJhvuYQ.js";
import "./useFocusRing-D2Xc8JP6.js";
import "./chunk-MNNRULGA-DyzUL4cr.js";
import "./index-C--itkGG.js";
const OnHoldTable = () => {
  const [workspaces, setWorkspaces] = reactExports.useState([]);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [limit] = reactExports.useState(5);
  const fetchWorkspaces = async (page) => {
    try {
      const response = await getApprovedWorkspaces(page, limit);
      if ((response == null ? void 0 : response.status) === 200) {
        const holdedSpace = response.data.data.approvedWorkspaces.filter(
          (workspace) => workspace.isOnHold
        );
        setWorkspaces(holdedSpace);
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
  reactExports.useEffect(() => {
    const fetchWorkspaces2 = async (page) => {
      try {
        const response = await getApprovedWorkspaces(page, limit);
        if ((response == null ? void 0 : response.status) === 200) {
          const holdedSpace = response.data.data.approvedWorkspaces.filter(
            (workspace) => workspace.isOnHold
          );
          setWorkspaces(holdedSpace);
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
    fetchWorkspaces2(currentPage);
  }, [currentPage, limit]);
  const handleUnHold = async (id) => {
    try {
      const response = await manageHolding(id);
      if ((response == null ? void 0 : response.status) === 200) {
        _t.success("workspace unholded");
        await fetchWorkspaces(currentPage);
      } else {
        _t.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      _t.error("something went wrong");
    }
  };
  const getStatusStyles = (workspace) => {
    if (workspace.isOnHold) return "bg-amber-500";
    return "bg-gray-500";
  };
  const getStatusText = (workspace) => {
    if (workspace.isOnHold) return "On Hold";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-800", children: (workspaces == null ? void 0 : workspaces.length) ? workspaces == null ? void 0 : workspaces.map((workspace) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "hover:bg-gray-50 dark:hover:bg-gray-600",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300", children: workspace.buildingName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => window.open(
                  `https://www.google.com/maps/search/${workspace.location}`,
                  "_blank"
                ),
                className: "inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaLocationArrow, { className: "h-4 w-4" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusStyles(
                  workspace
                )} dark:bg-gray-800`,
                children: getStatusText(workspace)
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 whitespace-nowrap text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleUnHold(workspace == null ? void 0 : workspace._id),
                className: "p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors dark:bg-emerald-500 dark:hover:bg-emerald-600",
                children: "Un Hold"
              }
            ) }) })
          ]
        },
        workspace._id
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          colSpan: 4,
          className: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400",
          children: "No on-hold workspaces found"
        }
      ) }) })
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
const BUserOnHold = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Approved Workspaces"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(OnHoldTable, {}) }) }) });
};
export {
  BUserOnHold as default
};
