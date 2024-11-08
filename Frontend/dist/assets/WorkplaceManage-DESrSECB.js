import { a as useDispatch, r as reactExports, b0 as setPageTitle, j as jsxRuntimeExports, b1 as ResponsiveDrawer } from "./index-DhlojAJa.js";
import { B as BuildingForm } from "./PropertyForm-UcaBykGk.js";
const WorkplaceManage = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Business User Management"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BuildingForm, {}) }) }) });
};
export {
  WorkplaceManage as default
};
