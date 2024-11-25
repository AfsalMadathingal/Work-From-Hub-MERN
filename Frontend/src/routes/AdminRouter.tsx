import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import PublicRoute from "../components/auth/AdminPublicRoute";
import PrivateRoute from "../components/auth/AdminPrivateRoute";
import NotFound from "../components/NotFound";
const Support = lazy(() => import("../pages/admin/Support"));
const AdminDashboard = lazy(() => import("../pages/admin/Dashboard"));
const BookingReportPage = lazy(
  () => import("../pages/admin/BookingReportPage")
);
const BookingHistory = lazy(() => import("../pages/admin/BookingHistory"));
const WorkspaceSubmission = lazy(
  () => import("../pages/admin/WorkspaceSubmission")
);
const View = lazy(() => import("../pages/admin/ViewWorkSpace"));
const WorkspaceManagement = lazy(
  () => import("../pages/admin/WorkSpaceManagement")
);
const UserManagement = lazy(() => import("../pages/admin/UserManagement"));
const MembershipPlan = lazy(() => import("../pages/admin/MembershipPlan"));
const BusinessUserManage = lazy(
  () => import("../pages/admin/BusinessUserManage")
);
const AdminLogin = lazy(() => import("../pages/adminAuth/AdminLogin"));

const AdminRouter: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/login"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PublicRoute element={AdminLogin} />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={AdminDashboard} />
          </Suspense>
        }
      />
      <Route
        path="/dashboard/detailed-report"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={BookingReportPage} />
          </Suspense>
        }
      />
      <Route
        path="/user-management"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={UserManagement} />
          </Suspense>
        }
      />
      <Route
        path="/membership"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={MembershipPlan} />
          </Suspense>
        }
      />
      <Route
        path="/support"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={Support} />
          </Suspense>
        }
      />
      <Route
        path="/business-user-management"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={BusinessUserManage} />
          </Suspense>
        }
      />
      <Route
        path="/workspace-submission"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={WorkspaceSubmission} />
          </Suspense>
        }
      />

      <Route
        path="/workspace-view/:workspaceId"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={View} />
          </Suspense>
        }
      />
      <Route
        path="/workspace-management"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={WorkspaceManagement} />
          </Suspense>
        }
      />
      <Route
        path="/bookings"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PrivateRoute element={BookingHistory} />
          </Suspense>
        }
      />

      <Route
        path="/*"
        element={
          <Suspense
            fallback={
              <LoadingPageWithReactLoading
                transparent={false}
                type="bars"
                color={PRIMARY_COLOR}
              />
            }
          >
            <PublicRoute element={NotFound} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AdminRouter;
