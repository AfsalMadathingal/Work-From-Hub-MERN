// src/index.tsx
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store, { persistor } from "./redux/store/store";
import GlobalTransitionWrapper from "./components/userSide/PageTransition ";
import { PersistGate } from "redux-persist/integration/react";
import { NextUIProvider } from "@nextui-org/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GlobalTransitionWrapper>
          <NextUIProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </NextUIProvider>
        </GlobalTransitionWrapper>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
