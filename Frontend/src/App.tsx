import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "./utils/MuiTheme";
import { useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import { Toaster } from 'react-hot-toast';
import LoadingPageWithReactLoading from "./components/loadingPage/Loading";

// Lazy loading components
const UserRouter = lazy(() => import("./routes/UserRouter"));
const BusinessUser = lazy(() => import("./routes/BusinessUser"));
const AdminRouter = lazy(() => import("./routes/AdminRouter"));
const ChatBox = lazy(() => import("./components/userSide/ChatBox"));
const ChatBoxForBuser = lazy(() => import("./components/businessUser/ChatBoxForBuser"));

const App: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    const savedTheme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [isDarkMode]);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isUserRoute = location.pathname.startsWith("/admin") || location.pathname.startsWith("/business"); 
  const isBusinessRoute = location.pathname.startsWith("/business");

  return (
    <MuiThemeProvider>
      <Toaster />
      <Suspense fallback={<LoadingPageWithReactLoading type="bars" color="white" height={100} width={100} />}>
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/business/*" element={<BusinessUser />} />
          <Route path="/*" element={<UserRouter />} />
        </Routes>
      </Suspense>
      {/* Lazy-loaded ChatBox components */}
      {!isUserRoute && (
        <Suspense fallback={<div>Loading chat...</div>}>
          <ChatBox />
        </Suspense>
      )}
      {isBusinessRoute && (
        <Suspense fallback={<div>Loading chat...</div>}>
          <ChatBoxForBuser />
        </Suspense>
      )}
    </MuiThemeProvider>
  );
};

export default App;
