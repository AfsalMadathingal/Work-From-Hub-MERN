import { a as useDispatch, r as reactExports, aW as setPageTitle, j as jsxRuntimeExports } from "./index-CTy2qHgP.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-fzO8EDL2.js";
import { B as BuildingForm } from "./PropertyForm-DAtuawDt.js";
import "tslib";
import "./Logout-9OedVr_p.js";
import "./Modal-mOoAhFB-.js";
import "./index-Dn0LtB1c.js";
import "./BUserAuthService-DMpVEy6B.js";
import "./BuserService-84KtDmbN.js";
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
