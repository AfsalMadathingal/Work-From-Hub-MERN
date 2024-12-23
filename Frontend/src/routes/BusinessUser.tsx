import  { lazy, Suspense,  } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
const WorkplaceManage = lazy(
  () => import("../pages/BusinessUserAuth/WorkplaceManage")
);
import PublicRoute from "../components/auth/BUsesrPublicRoute";
import PrivateRoute from "../components/auth/BUserPrivateRoute";
import BworkspaceEdit from "../pages/BusinessUserAuth/BworkspaceEdit";
import NotFound from "../components/NotFound";
import Profile from "../pages/Buser/Profile";
const BUserOnHold = lazy(() => import("../pages/Buser/BUserOnHold"));
const BBookingReportPage = lazy(
  () => import("../pages/Buser/BBookingReportPage")
);
const BUserBookingHistory = lazy(
  () => import("../pages/Buser/BBookingHistory")
);
const BUserDashBoard = lazy(() => import("../pages/Buser/BUserDashBoard"));
const BWorkspaceManage = lazy(() => import("../pages/Buser/WorkspaceManage"));
const ViewWorkSpace = lazy(
  () => import("../pages/BusinessUserAuth/ViewWorkSpace")
);
const BWorkspaceSubmissions = lazy(
  () => import("../pages/Buser/BWorkspaceSubmissions")
);
const SubmitNewWorkspace = lazy(
  () => import("../pages/Buser/SubmitNewWorkspace")
);
const ApprovedWorkspaces = lazy(
  () => import("../pages/Buser/ApprovedWorkspaces")
);

const BusinessLogin = lazy(
  () => import("../pages/BusinessUserAuth/BusinessUserLogin")
);
const BusinessUserRegister = lazy(
  () => import("../pages/BusinessUserAuth/BusinessUserRegister")
);

const BusinessUser = () => {
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
            <PublicRoute element={BusinessLogin} />
          </Suspense>
        }
      />
      <Route
        path="/register"
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
            <PublicRoute element={BusinessUserRegister} />
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
            <PrivateRoute element={BUserDashBoard} />
          </Suspense>
        }
      />

      <Route
        path="/dashboard/report"
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
            <PrivateRoute element={BBookingReportPage} />
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
            <PrivateRoute element={WorkplaceManage} />
          </Suspense>
        }
      />

      <Route
        path="/workspace-manage"
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
            <PrivateRoute element={BWorkspaceManage} />
          </Suspense>
        }
      />
      <Route
        path="/workspace-manage/submission"
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
            <PrivateRoute element={BWorkspaceSubmissions} />
          </Suspense>
        }
      />
       <Route
        path="/workspace-edit/:workspaceId"
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
            <PrivateRoute element={BworkspaceEdit} />
          </Suspense>
        }
      />
      <Route
        path="/workspace-manage/submit"
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
            <PrivateRoute element={SubmitNewWorkspace} />
          </Suspense>
        }
      />
      <Route
        path="/workspace/approved"
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
            <PrivateRoute element={ApprovedWorkspaces} />
          </Suspense>
        }
      />
      <Route
        path="/workspace/on-hold"
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
            <PrivateRoute element={BUserOnHold} />
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
            <PrivateRoute element={ViewWorkSpace} />
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
            <PrivateRoute element={BUserBookingHistory} />
          </Suspense>
        }
      />
        <Route
        path="/Profile"
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
            <PrivateRoute element={Profile} />
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

export default BusinessUser;
