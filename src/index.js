import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fontawesome';
import { PortfolioContextProvider } from './contexts/PortfolioContext';

ReactDOM.render(
  <PortfolioContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PortfolioContextProvider>,
  document.getElementById('root')
);
