// App.tsx
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "./utils/MuiTheme";
import UserRouter from "./routes/UserRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusinessUser from "./routes/BusinessUser";

const App: React.FC = () => {
  return (
    <MuiThemeProvider>
      <ToastContainer />
      <Routes>
        <Route path="/business/*" element={<BusinessUser />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </MuiThemeProvider>
  );
};

export default App;
