import { b0 as useLocation, j as jsxRuntimeExports, v as FaMapMarkerAlt, b1 as FaPhone, b2 as FaPowerOff, b3 as FaSnowflake, b4 as FaToilet, b5 as FaDollarSign, b6 as FaTable, k as FaChair, a as useDispatch, r as reactExports, aW as setPageTitle } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-B6aHqGrp.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
import "./BUserAuthService-DKSHJeo1.js";
const WorkspaceDetail = () => {
  const { state: { workspace } } = useLocation();
  const {
    buildingName,
    state,
    district,
    location,
    pinCode,
    street,
    contactNo,
    powerBackup,
    ac,
    bathroom,
    photos,
    tablesAvailable,
    seatsPerTable,
    approved,
    createdAt,
    pricePerSeat,
    rejected,
    rejectionReason
  } = workspace;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: buildingName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-3 py-1 rounded-full text-sm font-medium ${approved ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100" : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"}`, children: [
          approved && "Approved",
          rejected && "Rejected",
          !approved && !rejected && "Pending"
        ] }),
        rejected && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
          "Reason For Rejection: ",
          rejectionReason
        ] })
      ] })
    ] }),
    (photos == null ? void 0 : photos[0]) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: photos[0],
        alt: "Workspace",
        className: "w-full h-64 object-cover rounded-lg mb-6"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaMapMarkerAlt, { className: "text-blue-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Location" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: [
          street,
          ", ",
          district,
          ", ",
          state,
          ", ",
          pinCode
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.open(`https://www.google.com/maps/search/${location}`, "_blank"),
            className: "text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400",
            children: "View on Maps"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FaPhone, { className: "text-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: contactNo })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaPowerOff, { className: `${powerBackup ? "text-green-500" : "text-gray-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Power" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaSnowflake, { className: `${ac ? "text-green-500" : "text-gray-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "AC" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FaToilet, { className: `${bathroom ? "text-green-500" : "text-gray-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Bath" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaDollarSign, { className: "text-green-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
            "₹",
            pricePerSeat,
            "/seat"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaTable, { className: "text-blue-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
            tablesAvailable,
            " Tables"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaChair, { className: "text-blue-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm", children: [
            seatsPerTable,
            " Seats/Table"
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-xs text-gray-500 dark:text-gray-400", children: [
      "Listed on ",
      new Date(createdAt).toLocaleDateString()
    ] })
  ] });
};
const ViewWorkSpace = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceDetail, {}) }) }) });
};
export {
  ViewWorkSpace as default
};
