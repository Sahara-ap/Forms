import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { store } from 'store/store';
import { ResetStyles } from 'styles/ResetStyles';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ToastProvider } from 'components/ToastProvider';

import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyles />
      <GlobalStyles />
      <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
