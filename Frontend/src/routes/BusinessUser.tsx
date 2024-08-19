import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/lodiangPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import BusinessLogin from "../pages/BuisinessUserAuth/BusinessUserLogin";
import BusinessUserRegister from "../pages/BuisinessUserAuth/BusinessUserRegister";



const BusinessUser = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <BusinessLogin />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <BusinessUserRegister />
          </Suspense>
        }
      />
      {/* <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <PublicRoute element={LoginPage } />
          </Suspense>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <PublicRoute element={UserRegister} />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={HomePage} />
          </Suspense>
        }
      /> */}
    </Routes>
  );
};

export default BusinessUser;
