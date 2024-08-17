import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/lodiangPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import PrivateRoute from '../components/auth/PrivateRoute';
import PublicRoute from '../components/auth/PublicRoute';  // Import PublicRoute

// Lazy load all components
const LoginPage = lazy(() => import('../pages/userAuth/UserLogin'));
const UserRegister = lazy(() => import('../pages/userAuth/UserRegister'));
const LandingPage = lazy(() => import('../pages/userSide/LandingPage'));
const HomePage = lazy(() => import('../pages/userSide/HomePage'));

const UserRouter = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
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
        path="/u/home"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={HomePage} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default UserRouter;
