import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/userAuth/UserLogin";
import UserRegister from "../pages/userAuth/UserRegister";
import LandingPage from "../pages/userSide/LandingPage";

const UserRouter = () => {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<UserRegister />} />
    </Routes>
  );

};

export default UserRouter;
