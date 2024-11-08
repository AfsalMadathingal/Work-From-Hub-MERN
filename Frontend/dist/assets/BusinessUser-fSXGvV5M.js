const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/WorkplaceManage-7fvVxGcE.js","assets/index-BgyoVvld.js","assets/index-C71yZ_iP.css","assets/BusinessUserLayout-Ca3QZn1A.js","assets/Logout-D0QFIkxM.js","assets/clsx-DgYk2OaC.js","assets/Modal-C-CzRshO.js","assets/index-JtRx5LEO.js","assets/iconBase-b0mU4BcV.js","assets/colors-w8IeHXqN.js","assets/BUserAuthService-DL4tNSdu.js","assets/index-Bxisd2S8.js","assets/alert-cjddj-FJ.js","assets/createLucideIcon-aT5HAUZt.js","assets/PropertyForm-CqP5eJBM.js","assets/index-CBXuPOJf.js","assets/BuserService-kHRcvCRa.js","assets/joi-browser.min-7gqfidDl.js","assets/Animation-eGCpIPZ_.js","assets/create-visual-element-Bp75OA0n.js","assets/BUserOnHold-CnjXvx4l.js","assets/adminAuth-DQebXDMS.js","assets/chunk-MRXO6UUP-BD19CaN0.js","assets/chunk-N2KXC5ZE-B3rqp_Yo.js","assets/chunk-XHQUSKIE-kpJhvuYQ.js","assets/useFocusRing-D2Xc8JP6.js","assets/chunk-MNNRULGA-DyzUL4cr.js","assets/index-C--itkGG.js","assets/BBookingReportPage-DTfZNlue.js","assets/jspdf.es.min-DK4q9H1u.js","assets/typeof-WJl3ipnu.js","assets/html2canvas.esm-Dtsxr8dG.js","assets/xlsx-BSOddODG.js","assets/BBookingHistory-BsZZYdGd.js","assets/jspdf.plugin.autotable-DIW-iphY.js","assets/BUserDashBoard-Bmazvsov.js","assets/auto-Dt0TWExQ.js","assets/WorkspaceManage-Di-aIiEr.js","assets/ViewWorkSpace-DOz0p5WP.js","assets/BWorkspaceSubmissions-B1pEtSLY.js","assets/NotificationService-DlsDu61j.js","assets/SubmitNewWorkspace-C-cowctt.js","assets/ApprovedWorkspaces-DYV-gL5V.js","assets/BusinessUserLogin-CYfyfEkC.js","assets/userValidator-q4F520mw.js","assets/BusinessUserRegister-BFPzjR06.js","assets/react-checkmark.min-CMPtJ3pk.js","assets/react-toastify.esm-CTm47IRj.js"])))=>i.map(i=>d[i]);
import { c as useSelector, j as jsxRuntimeExports, N as Navigate, b as reactExports, d as __vitePreload, e as useLocation, R as Routes, f as Route } from "./index-BgyoVvld.js";
import { L as LoadingPageWithReactLoading, P as PRIMARY_COLOR } from "./colors-w8IeHXqN.js";
const PublicRoute = ({ element: Element }) => {
  const { isAuthenticated } = useSelector((state) => state.businessUser);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/business/dashboard" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {});
};
const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useSelector((state) => state.businessUser);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/business/login" });
};
const WorkplaceManage = reactExports.lazy(
  () => __vitePreload(() => import("./WorkplaceManage-7fvVxGcE.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) : void 0)
);
const BUserOnHold = reactExports.lazy(() => __vitePreload(() => import("./BUserOnHold-CnjXvx4l.js"), true ? __vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,15,21,18,19,16,22,23,24,25,26,27]) : void 0));
const BBookingReportPage = reactExports.lazy(
  () => __vitePreload(() => import("./BBookingReportPage-DTfZNlue.js"), true ? __vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,29,30,31,32,15,16]) : void 0)
);
const BUserBookingHistory = reactExports.lazy(
  () => __vitePreload(() => import("./BBookingHistory-BsZZYdGd.js"), true ? __vite__mapDeps([33,1,2,3,4,5,6,7,8,9,10,11,12,13,16,29,30,34]) : void 0)
);
const BUserDashBoard = reactExports.lazy(() => __vitePreload(() => import("./BUserDashBoard-Bmazvsov.js"), true ? __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,36,16]) : void 0));
const BWorkspaceManage = reactExports.lazy(() => __vitePreload(() => import("./WorkspaceManage-Di-aIiEr.js"), true ? __vite__mapDeps([37,1,2,3,4,5,6,7,8,9,10,11,12,13,18,19]) : void 0));
const ViewWorkSpace = reactExports.lazy(
  () => __vitePreload(() => import("./ViewWorkSpace-DOz0p5WP.js"), true ? __vite__mapDeps([38,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16]) : void 0)
);
const BWorkspaceSubmissions = reactExports.lazy(
  () => __vitePreload(() => import("./BWorkspaceSubmissions-B1pEtSLY.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,21,40]) : void 0)
);
const SubmitNewWorkspace = reactExports.lazy(
  () => __vitePreload(() => import("./SubmitNewWorkspace-C-cowctt.js"), true ? __vite__mapDeps([41,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) : void 0)
);
const ApprovedWorkspaces = reactExports.lazy(
  () => __vitePreload(() => import("./ApprovedWorkspaces-DYV-gL5V.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,13,15,21,16,18,19,22,23,24,25,26,27]) : void 0)
);
const BusinessLogin = reactExports.lazy(
  () => __vitePreload(() => import("./BusinessUserLogin-CYfyfEkC.js"), true ? __vite__mapDeps([43,1,2,44,17,10,11,12,9]) : void 0)
);
const BusinessUserRegister = reactExports.lazy(
  () => __vitePreload(() => import("./BusinessUserRegister-BFPzjR06.js"), true ? __vite__mapDeps([45,1,2,46,17,9,10,11,12,47]) : void 0)
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
