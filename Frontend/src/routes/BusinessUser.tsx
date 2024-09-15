import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import WorkplaceManage from "../pages/BusinessUserAuth/WorkplaceManage";
import PublicRoute from "../components/auth/BUsesrPublicRoute";
import PrivateRoute from "../components/auth/BUserPrivateRoute";
import BWorkspaceListing from "../components/businessUser/BWorkSpace";
import BWorkspaceManage from "../pages/BusinessUserAuth/WorkspaceListing";
import BWorkspaceDetail from "../components/businessUser/BWorkspaceDetails";
import ViewWorkSpace from "../pages/BusinessUserAuth/ViewWorkSpace";
const BusinessLogin = lazy(
  () => import("../pages/BusinessUserAuth/BusinessUserLogin")
);
const BusinessUserRegister = lazy(
  () => import("../pages/BusinessUserAuth/BusinessUserRegister")
);

const BusinessUser = () => {
  const location = useLocation();

  useEffect(() => {}, []);

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
            <PrivateRoute element={WorkplaceManage} />
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
    </Routes>
  );
};

export default BusinessUser;
