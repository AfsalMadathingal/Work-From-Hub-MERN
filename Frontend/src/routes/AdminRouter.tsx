import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import PublicRoute from "../components/auth/AdminPublicRoute";
import UserManagement from "../pages/admin/UserManagement";
import PrivateRoute from "../components/auth/AdminPrivateRoute";
import MembershipPlan from "../pages/admin/MembershipPlan";
import BusinessUserManage from "../pages/admin/BusinessUserManage";

const AdminLogin = lazy(() => import("../pages/adminAuth/AdminLogin"));


const AdminRouter = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PublicRoute element={AdminLogin} />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={UserManagement} />
          </Suspense>
        }
      />
      <Route
        path="/user-management"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={UserManagement} />
          </Suspense>
        }
      />
      <Route
        path="/membership"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={MembershipPlan} />
          </Suspense>
        }
      />
      <Route
        path="/business-user-management"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={BusinessUserManage} />
          </Suspense>
        }
      />
      
     
    </Routes>
  );
};

export default AdminRouter;
