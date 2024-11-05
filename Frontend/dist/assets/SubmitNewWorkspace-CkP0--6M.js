import { a as useDispatch, r as reactExports, aW as setPageTitle, j as jsxRuntimeExports } from "./index-BA_d4uvr.js";
import { R as ResponsiveDrawer } from "./BusinessUserLayout-B6aHqGrp.js";
import { B as BuildingForm } from "./PropertyForm-hn-Mw0b1.js";
import "./Logout-BDQ50NsR.js";
import "./Modal-B6iXN3ku.js";
import "./index-Ban5FYSq.js";
import "./BUserAuthService-DKSHJeo1.js";
import "./BuserService-BN6O1gPT.js";
const SubmitNewWorkspace = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Submit New Workspace"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BuildingForm, {}) }) }) });
};
export {
  SubmitNewWorkspace as default
};
