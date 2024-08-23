import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
const BusinessLogin = lazy(() => import("../pages/BusinessUserAuth/BusinessUserLogin"));
const BusinessUserRegister = lazy(() => import("../pages/BusinessUserAuth/BusinessUserRegister"));

const BusinessUser = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <BusinessLogin />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <BusinessUserRegister />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default BusinessUser;
