import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// need line 7 for bootstrap styles to load - src: https://stackoverflow.com/questions/47354472/react-bootstrap-not-styling-my-react-components
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styling/buttons.scss';
import PortfolioProvider from './context/PortfolioContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PortfolioProvider >
      <App />
    </PortfolioProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
