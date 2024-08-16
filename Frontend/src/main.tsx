// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store/store';
import GlobalTransitionWrapper from './components/userSide/PageTransition ';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GlobalTransitionWrapper>

        <App />
      </GlobalTransitionWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
