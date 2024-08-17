// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store, { persistor } from "./redux/store/store";
import GlobalTransitionWrapper from "./components/userSide/PageTransition ";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalTransitionWrapper>
            <App />
          </GlobalTransitionWrapper>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
