// App.tsx
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "./utils/MuiTheme";
import UserRouter from "./routes/UserRouter";


const App: React.FC = () => {


  return (
    <MuiThemeProvider>
        <Routes>
          <Route path="/*" element={<UserRouter />} />
        </Routes>
    </MuiThemeProvider>
  );
};

export default App;
