import { a as useDispatch, b as reactExports, K as setPageTitle, j as jsxRuntimeExports } from "./index-BgyoVvld.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-Ca3QZn1A.js";
import { B as BuildingForm } from "./PropertyForm-CqP5eJBM.js";
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
import "./index-CBXuPOJf.js";
import "./BuserService-kHRcvCRa.js";
import "./joi-browser.min-7gqfidDl.js";
import "./Animation-eGCpIPZ_.js";
import "./create-visual-element-Bp75OA0n.js";
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
