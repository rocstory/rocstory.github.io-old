import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './fontawesome';
import { PageProvider } from './contexts/PageContext';


ReactDOM.render(
    <React.StrictMode>
      <PageProvider>
        <App />
      </PageProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
