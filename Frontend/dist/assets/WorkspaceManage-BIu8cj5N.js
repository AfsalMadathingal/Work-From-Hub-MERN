import { r as reactExports, j as jsxRuntimeExports, A as AnimatedPage, L as Link, a as useDispatch, b0 as setPageTitle, b1 as ResponsiveDrawer } from "./index-DhlojAJa.js";
function EyeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef$1 = /* @__PURE__ */ reactExports.forwardRef(EyeIcon);
function PlusCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /* @__PURE__ */ reactExports.forwardRef(PlusCircleIcon);
const PropertyCards = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center min-h-[80vh] bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 grid-cols-1 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-700 shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef, { className: "h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-4 text-gray-700 dark:text-gray-300", children: "Submit New Property" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/business/workspace-manage/submit", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300", children: "Submit" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-slate-700 shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ForwardRef$1, { className: "h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-4 text-gray-700 dark:text-gray-300", children: "View Submitted Properties" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/business/workspace-manage/submission", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300", children: "View" }) })
    ] })
  ] }) }) });
};
const BWorkspaceManage = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen dark:bg-gray-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(PropertyCards, {}) }) }) });
};
export {
  BWorkspaceManage as default
};
