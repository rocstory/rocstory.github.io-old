import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './fontawesome';
import { PageProvider } from './contexts/PageContext';
import { EntryProvider } from './contexts/EntryContext';


ReactDOM.render(
    <React.StrictMode>
      <PageProvider>
        <EntryProvider>
          <App />
        </EntryProvider>
      </PageProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
