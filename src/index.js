import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './fontawesome';
import { PageProvider } from './contexts/PageContext';
import { ArticleProvider } from './contexts/ArticleContext';


ReactDOM.render(
    <React.StrictMode>
      <PageProvider>
        <ArticleProvider>
          <App />
        </ArticleProvider>
      </PageProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
