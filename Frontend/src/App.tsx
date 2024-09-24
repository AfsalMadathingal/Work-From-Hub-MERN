import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "./utils/MuiTheme";
import UserRouter from "./routes/UserRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusinessUser from "./routes/BusinessUser";
import AdminRouter from "./routes/AdminRouter";
import { useEffect } from "react";

const App: React.FC = () => {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  return (
    <MuiThemeProvider>
      <ToastContainer />
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/business/*" element={<BusinessUser />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;
