import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoadingPageWithReactLoading from "../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../constant/colors";
import PrivateRoute from '../components/auth/PrivateRoute';
import PublicRoute from '../components/auth/PublicRoute';  
import Bookings from "../pages/userSide/Bookings";
import MembershipDetails from "../components/userSide/MembershipDetails";
import MembershipInfor from "../pages/userSide/MembershipInfo";
const WorkspaceListingsPage = lazy(() => import('../pages/userSide/WorkspaceListings'));
const ViewWorkspacePage = lazy(() => import('../pages/userSide/ViewWorkspace'));
const BookingFrom = lazy(() => import('../pages/userSide/BookingFrom'));
const BookingCheckout = lazy(() => import('../pages/userSide/BookingCheckout'));
const LoginPage = lazy(() => import('../pages/userAuth/UserLogin'));
const UserRegister = lazy(() => import('../pages/userAuth/UserRegister'));
const LandingPage = lazy(() => import('../pages/userSide/LandingPage'));
const HomePage = lazy(() => import('../pages/userSide/HomePage'));
const Profile = lazy(() => import('../pages/userSide/Profile'));

const UserRouter = () => {
  const location = useLocation();
  

  return (
    
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <LandingPage />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="spin" color={PRIMARY_COLOR} />}>
            <PublicRoute element={LoginPage } />
          </Suspense>
        }
      />
      <Route
        path="/sign-up"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PublicRoute element={UserRegister} />
          </Suspense>
        }
      />
      <Route
        path="/workspace"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={WorkspaceListingsPage} />
          </Suspense>
        }
      />
      <Route
        path="/workspace/:id/view"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={ViewWorkspacePage} />
          </Suspense>
        }
      />
      <Route
        path="/workspace/:id/book"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={BookingFrom} />
          </Suspense>
        }
      />
       <Route
        path="/workspace/:id/booking"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={BookingCheckout} />
          </Suspense>
        }
      />
      <Route
        path="/user/home"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={HomePage} />
          </Suspense>
        }
      />
      <Route
        path="/user/profile"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={Profile} />
          </Suspense>
        }
      />
        <Route
        path="/user/bookings"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={Bookings} />
          </Suspense>
        }
      />
         <Route
        path="/user/membership"
        element={
          <Suspense fallback={<LoadingPageWithReactLoading transparent={false} type="bars" color={PRIMARY_COLOR} />}>
            <PrivateRoute element={MembershipInfor} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default UserRouter;
