import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "./utils/MuiTheme";
import UserRouter from "./routes/UserRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusinessUser from "./routes/BusinessUser";
import AdminRouter from "./routes/AdminRouter";
import { useEffect } from "react";
import ChatBox from "./components/userSide/ChatBox";
import ChatBoxForBuser from "./components/businessUser/ChatBoxForBuser";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isUserRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/business"); 
  const isBusinessRoute = location.pathname.startsWith("/business");



  return (
    <MuiThemeProvider>
      <ToastContainer />
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/business/*" element={<BusinessUser />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
      {/* Render ChatBox only if it's a user route */}
      {!isUserRoute && <ChatBox />}
      {isBusinessRoute && <ChatBoxForBuser />}
    </MuiThemeProvider>
  );
};

export default App;
