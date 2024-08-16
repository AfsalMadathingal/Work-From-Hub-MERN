import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../pages/userAuth/UserLogin";
import UserRegister from "../pages/userAuth/UserRegister";
import LandingPage from "../pages/userSide/LandingPage";
import HomePage from "../pages/userSide/HomePage";
import PrivateRoute from "../components/auth/PrivateRoute";



const UserRouter = () => {
  const location = useLocation()
  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<UserRegister />} />
        <Route path="/u/home" element={<PrivateRoute element={HomePage} />}/>
      </Routes>
  );
};

export default UserRouter;
