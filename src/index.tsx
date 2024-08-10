import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResetStyles } from 'styles/ResetStyles';
import { GlobalStyles } from 'styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ResetStyles />
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

