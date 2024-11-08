const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WorkplaceManage-BdKwHum-.js","assets/index-CRCdbRYf.js","assets/index-C71yZ_iP.css","assets/BusinessUserLayout-1i5_bWXy.js","assets/Logout-BI18FvRh.js","assets/clsx-DgYk2OaC.js","assets/Modal-DBUlL1Mq.js","assets/index-CrzzP1Ob.js","assets/iconBase-CZo89hZi.js","assets/colors-BHzic30Z.js","assets/BUserAuthService-DL4tNSdu.js","assets/index-Bxisd2S8.js","assets/alert-cjddj-FJ.js","assets/createLucideIcon-I0cbKwv6.js","assets/PropertyForm-B4SZgRqV.js","assets/index-DiJo3T71.js","assets/BuserService-BTKhPjcw.js","assets/joi-browser.min-De1ehRHH.js","assets/Animation-Cos3fwbw.js","assets/create-visual-element-IukP1vNR.js","assets/BUserOnHold-Dwo6o8qX.js","assets/adminAuth-CQK_s7r4.js","assets/chunk-MRXO6UUP-CC7aVgFT.js","assets/chunk-N2KXC5ZE-Blp81Z_t.js","assets/chunk-XHQUSKIE-C8hINOKQ.js","assets/useFocusRing-6DVXckHy.js","assets/chunk-MNNRULGA-DyzUL4cr.js","assets/index-C--itkGG.js","assets/BBookingReportPage-DFde7ajb.js","assets/jspdf.es.min-BSu__lXo.js","assets/typeof-WJl3ipnu.js","assets/html2canvas.esm-Dtsxr8dG.js","assets/xlsx-BSOddODG.js","assets/BBookingHistory-CBokOBCt.js","assets/jspdf.plugin.autotable-B6pyBYsY.js","assets/BUserDashBoard-B7trRxnK.js","assets/auto-Cc2P1ooj.js","assets/WorkspaceManage-CYDIufGg.js","assets/ViewWorkSpace-BQ8-sBM0.js","assets/BWorkspaceSubmissions-ClUJirNW.js","assets/NotificationService-DlsDu61j.js","assets/SubmitNewWorkspace-CvimNkVl.js","assets/ApprovedWorkspaces-CvHUY6g7.js","assets/BusinessUserLogin-aMO7PfDp.js","assets/userValidator-Y1z3hoIo.js","assets/BusinessUserRegister-D0OqY95X.js","assets/react-checkmark.min-DTr8hVhS.js","assets/react-toastify.esm-Bun9FK4S.js"])))=>i.map(i=>d[i]);
import { c as useSelector, j as jsxRuntimeExports, N as Navigate, b as reactExports, d as __vitePreload, e as useLocation, R as Routes, f as Route } from "./index-CRCdbRYf.js";
import { L as LoadingPageWithReactLoading, P as PRIMARY_COLOR } from "./colors-BHzic30Z.js";
const PublicRoute = ({ element: Element }) => {
  const { isAuthenticated } = useSelector((state) => state.businessUser);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/business/dashboard" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {});
};
const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useSelector((state) => state.businessUser);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/business/login" });
};
const WorkplaceManage = reactExports.lazy(
  () => __vitePreload(() => import("./WorkplaceManage-BdKwHum-.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) : void 0)
);
const BUserOnHold = reactExports.lazy(() => __vitePreload(() => import("./BUserOnHold-Dwo6o8qX.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,15,21,18,19,16,22,23,24,25,26,27]) : void 0));
const BBookingReportPage = reactExports.lazy(
  () => __vitePreload(() => import("./BBookingReportPage-DFde7ajb.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,29,30,31,32,15,16]) : void 0)
);
const BUserBookingHistory = reactExports.lazy(
  () => __vitePreload(() => import("./BBookingHistory-CBokOBCt.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,16,29,30,34]) : void 0)
);
const BUserDashBoard = reactExports.lazy(() => __vitePreload(() => import("./BUserDashBoard-B7trRxnK.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,36,16]) : void 0));
const BWorkspaceManage = reactExports.lazy(() => __vitePreload(() => import("./WorkspaceManage-CYDIufGg.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,18,19]) : void 0));
const ViewWorkSpace = reactExports.lazy(
  () => __vitePreload(() => import("./ViewWorkSpace-BQ8-sBM0.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16]) : void 0)
);
const BWorkspaceSubmissions = reactExports.lazy(
  () => __vitePreload(() => import("./BWorkspaceSubmissions-ClUJirNW.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,21,40]) : void 0)
);
const SubmitNewWorkspace = reactExports.lazy(
  () => __vitePreload(() => import("./SubmitNewWorkspace-CvimNkVl.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) : void 0)
);
const ApprovedWorkspaces = reactExports.lazy(
  () => __vitePreload(() => import("./ApprovedWorkspaces-CvHUY6g7.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,15,21,16,18,19,22,23,24,25,26,27]) : void 0)
);
const BusinessLogin = reactExports.lazy(
  () => __vitePreload(() => import("./BusinessUserLogin-aMO7PfDp.js"), true ? __vite__mapDeps([43,1,2,44,17,10,11,12,9]) : void 0)
);
const BusinessUserRegister = reactExports.lazy(
  () => __vitePreload(() => import("./BusinessUserRegister-D0OqY95X.js"), true ? __vite__mapDeps([45,1,2,46,17,9,10,11,12,47]) : void 0)
);
const BusinessUser = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { location, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/login",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRoute, { element: BusinessLogin })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/register",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRoute, { element: BusinessUserRegister })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/dashboard",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BUserDashBoard })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/dashboard/report",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BBookingReportPage })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-submission",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: WorkplaceManage })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-manage",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BWorkspaceManage })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-manage/submission",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BWorkspaceSubmissions })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-manage/submit",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: SubmitNewWorkspace })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace/approved",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: ApprovedWorkspaces })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace/on-hold",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BUserOnHold })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-view/:workspaceId",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: ViewWorkSpace })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/bookings",
        element: /* @__PURE__ */ jsxRuntimeExports.jsx(
          reactExports.Suspense,
          {
            fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoadingPageWithReactLoading,
              {
                transparent: false,
                type: "bars",
                color: PRIMARY_COLOR
              }
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BUserBookingHistory })
          }
        )
      }
    )
  ] }, location.pathname);
};
export {
  BusinessUser as default
};
