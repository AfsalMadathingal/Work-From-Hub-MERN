const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Support-Cm-izTgL.js","assets/index-CRCdbRYf.js","assets/index-C71yZ_iP.css","assets/AdminLayout-PDEGQE-h.js","assets/Logout-BI18FvRh.js","assets/clsx-DgYk2OaC.js","assets/Modal-DBUlL1Mq.js","assets/index-CrzzP1Ob.js","assets/iconBase-CZo89hZi.js","assets/colors-BHzic30Z.js","assets/index-DiJo3T71.js","assets/adminAuth-CQK_s7r4.js","assets/index-Bxisd2S8.js","assets/react-toastify.esm-Bun9FK4S.js","assets/index-DaNQagWn.js","assets/chunk-XHQUSKIE-C8hINOKQ.js","assets/chunk-N2KXC5ZE-Blp81Z_t.js","assets/chunk-DBLREEYE-FUIzjYHW.js","assets/useFocusRing-6DVXckHy.js","assets/features-animation-DXMUZmFI.js","assets/create-visual-element-IukP1vNR.js","assets/useFocusable-B9R5QQmh.js","assets/chunk-MNNRULGA-DyzUL4cr.js","assets/Dashboard-CASrIqoP.js","assets/auto-Cc2P1ooj.js","assets/chunk-YRZGWF2W-DjUiUOR9.js","assets/chunk-QXREVWCS-c8bsRa8m.js","assets/index-DLS5rOVa.js","assets/index-CJMRsIY3.js","assets/getChildNodes-C8Y8vqTe.js","assets/useControlledState-zThHW1ja.js","assets/chunk-RFUEKIFS-5kmiI8xu.js","assets/LiveAnnouncer-WZh44TKt.js","assets/chunk-IXXDDLGU-BItF53ib.js","assets/BookingReportPage-DT0EmTc4.js","assets/jspdf.es.min-BSu__lXo.js","assets/typeof-WJl3ipnu.js","assets/html2canvas.esm-Dtsxr8dG.js","assets/xlsx-BSOddODG.js","assets/BookingHistory-7RBlvcxM.js","assets/jspdf.plugin.autotable-B6pyBYsY.js","assets/createLucideIcon-I0cbKwv6.js","assets/WorkspaceSubmission-C7Le4JoU.js","assets/chunk-MRXO6UUP-CC7aVgFT.js","assets/index-C--itkGG.js","assets/ViewWorkSpace-DELZF0ks.js","assets/index-BmspmpXF.js","assets/index-X3VZbKVJ.js","assets/defineProperty-ClBSNQ9O.js","assets/Dialog-BS1oof5j.js","assets/NotificationService-DlsDu61j.js","assets/ViewWorkSpace-DfYqLxsB.css","assets/WorkSpaceManagement-BPLXRVQ0.js","assets/UserManagement-yUbrKJcf.js","assets/EditUserProfile-CZd8mszd.js","assets/adminValidator-C5GevmfX.js","assets/joi-browser.min-De1ehRHH.js","assets/chunk-3ZXLDIEA-t0c3aBnz.js","assets/useOverlayTriggerState-DxxZd4vX.js","assets/MembershipPlan-B98uupwp.js","assets/userValidator-Y1z3hoIo.js","assets/chunk-3YEK3JGC-cX8-fyRH.js","assets/tslib.es6-hzme6y_e.js","assets/BusinessUserManage-DWymcZSX.js","assets/square-pen-DuusKohF.js","assets/AdminLogin-KhiCsYi6.js"])))=>i.map(i=>d[i]);
import { c as useSelector, j as jsxRuntimeExports, N as Navigate, u as useNavigate, a as useDispatch, b as reactExports, g as resetAdmin, _ as _t, d as __vitePreload, e as useLocation, R as Routes, f as Route } from "./index-CRCdbRYf.js";
import { L as LoadingPageWithReactLoading, P as PRIMARY_COLOR } from "./colors-BHzic30Z.js";
import { a as adminAxiosInstance, l as logout } from "./adminAuth-CQK_s7r4.js";
import { A as AxiosError } from "./index-Bxisd2S8.js";
const PublicRoute = ({ element: Element }) => {
  const { isAuthenticated } = useSelector((state) => state.admin);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/admin/dashboard" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {});
};
const api = adminAxiosInstance;
const getPlans = async (accessToken, page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/admin/plan?page=${page}&limit=${itemsPerPage}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const createPlan = async (accessToken, plan) => {
  const response = await api.post("/api/admin/plan", plan, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response;
};
const changePlanStatus = async (id, action) => {
  try {
    return await api.patch("/api/admin/plan", { id, action });
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllUsers = async (page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/admin/users?page=${page}&limit=${itemsPerPage}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllBusinessUsers = async (page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/admin/business-users?page=${page}&limit=${itemsPerPage}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const manageBlockAndUnblock = async (user) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/users/block-and-unblock/${user._id}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const blockAndUnblockBUser = async (user) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-user/block-and-unblock/${user == null ? void 0 : user._id}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const EditUser = async (user) => {
  try {
    const response = await adminAxiosInstance.patch(`/api/admin/users`, user);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const editBusinessUser = async (user) => {
  try {
    const response = await adminAxiosInstance.patch(
      `/api/admin/business-users`,
      user
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const searchPlans = async (page, itemsPerPage, query) => {
  try {
    const response = await adminAxiosInstance.get(
      `/api/admin/plan?page=${page}&limit=${itemsPerPage}&query=${query}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllPendingSubmission = async (page, itemsPerPage) => {
  try {
    const response = await api.get(
      `/api/admin/workspace-submission?page=${page}&limit=${itemsPerPage}`
    );
    ;
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const approveWorkspace = async (id) => {
  try {
    const response = await api.patch(`/api/admin/approve-workspace/${id}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const rejectWorkspace = async (id, reason) => {
  try {
    const response = await api.patch(`/api/admin/reject-workspace/${id}`, { reason });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllApprovedWorkspaces = async (page, itemsPerPage) => {
  try {
    const response = await api.get(`/api/admin/approved-workspaces?page=${page}&limit=${itemsPerPage}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const validateAdminSession = async () => {
  try {
    const response = await adminAxiosInstance.get("/api/admin/validate-session");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getAllBookings = async (page, itemsPerPage) => {
  try {
    const response = await api.get(`/api/admin/bookings?page=${page}&limit=${itemsPerPage}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getDashboardData = async () => {
  try {
    const response = await api.get("/api/admin/dashboard");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getDetailedReport = async (filters) => {
  try {
    const response = await api.get(`/api/admin/booking-report?${filters.toString()}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const getWorkspace = async (id) => {
  try {
    const response = await api.get(`/api/admin/workspace/${id}`);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    } else {
      return null;
    }
  }
};
const PrivateRoute = ({ element: Element }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    const validateSession = async () => {
      const response = await validateAdminSession();
      if ((response == null ? void 0 : response.status) === 200) {
        return;
      }
      if ((response == null ? void 0 : response.status) === 401) {
        await logout();
        dispatch(resetAdmin());
        navigate("/admin/login");
        _t.error("Session expired Please login again");
      }
    };
    validateSession();
  }, [dispatch, navigate]);
  const { isAuthenticated } = useSelector((state) => state.admin);
  return isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsx(Element, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/admin/login" });
};
const Support = reactExports.lazy(() => __vitePreload(() => import("./Support-Cm-izTgL.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]) : void 0));
const AdminDashboard = reactExports.lazy(() => __vitePreload(() => import("./Dashboard-CASrIqoP.js"), true ? __vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,24,25,18,15,16,26,27,28,29,21,30,31,32,33]) : void 0));
const BookingReportPage = reactExports.lazy(() => __vitePreload(() => import("./BookingReportPage-DT0EmTc4.js"), true ? __vite__mapDeps([34,1,2,3,4,5,6,7,8,9,10,11,12,35,36,37,38]) : void 0));
const BookingHistory = reactExports.lazy(() => __vitePreload(() => import("./BookingHistory-7RBlvcxM.js"), true ? __vite__mapDeps([39,1,2,3,4,5,6,7,8,9,10,11,12,40,41,35,36]) : void 0));
const WorkspaceSubmission = reactExports.lazy(() => __vitePreload(() => import("./WorkspaceSubmission-C7Le4JoU.js"), true ? __vite__mapDeps([42,1,2,3,4,5,6,7,8,9,10,11,12,43,16,15,18,22,44]) : void 0));
const View = reactExports.lazy(() => __vitePreload(() => import("./ViewWorkSpace-DELZF0ks.js"), true ? __vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,46,47,48,36,49,50,51]) : void 0));
const WorkspaceManagement = reactExports.lazy(() => __vitePreload(() => import("./WorkSpaceManagement-BPLXRVQ0.js"), true ? __vite__mapDeps([52,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0));
const UserManagement = reactExports.lazy(() => __vitePreload(() => import("./UserManagement-yUbrKJcf.js"), true ? __vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,54,16,15,18,13,55,56,49,57,58,21,30,19,20,28,31,25,26,27,29,32,33]) : void 0));
const MembershipPlan = reactExports.lazy(() => __vitePreload(() => import("./MembershipPlan-B98uupwp.js"), true ? __vite__mapDeps([59,1,2,3,4,5,6,7,8,9,10,11,12,60,56,61,16,15,29,58,21,30,62,19,20,18,17,22,28]) : void 0));
const BusinessUserManage = reactExports.lazy(() => __vitePreload(() => import("./BusinessUserManage-DWymcZSX.js"), true ? __vite__mapDeps([63,1,2,3,4,5,6,7,8,9,10,11,12,54,16,15,18,13,55,56,49,64,41,57,58,21,30,19,20,28,31,25,26,27,29,32,33]) : void 0));
const AdminLogin = reactExports.lazy(() => __vitePreload(() => import("./AdminLogin-KhiCsYi6.js"), true ? __vite__mapDeps([65,1,2,11,12,9,55,56]) : void 0));
const AdminRouter = () => {
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicRoute, { element: AdminLogin })
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: AdminDashboard })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/dashboard/detailed-report",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BookingReportPage })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/user-management",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: UserManagement })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/membership",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: MembershipPlan })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/support",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: Support })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/business-user-management",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BusinessUserManage })
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: WorkspaceSubmission })
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: View })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Route,
      {
        path: "/workspace-management",
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: WorkspaceManagement })
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
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrivateRoute, { element: BookingHistory })
          }
        )
      }
    )
  ] }, location.pathname);
};
const AdminRouter$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  AdminRouter$1 as A,
  EditUser as E,
  getDetailedReport as a,
  getAllBookings as b,
  getAllPendingSubmission as c,
  approveWorkspace as d,
  getWorkspace as e,
  getAllApprovedWorkspaces as f,
  getDashboardData as g,
  getAllUsers as h,
  changePlanStatus as i,
  createPlan as j,
  getPlans as k,
  getAllBusinessUsers as l,
  manageBlockAndUnblock as m,
  blockAndUnblockBUser as n,
  editBusinessUser as o,
  rejectWorkspace as r,
  searchPlans as s
};
