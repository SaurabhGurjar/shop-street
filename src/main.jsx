import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyle';
import CustomRouterProvider from './router/routes';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <CustomRouterProvider />
  </React.StrictMode>
);
