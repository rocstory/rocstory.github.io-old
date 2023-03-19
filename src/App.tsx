import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { EPortfolioPages, PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from './appConfig.json';
import LinksPage from './pages/LinksPage/LinksPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Entry from './components/Entry/Entry';
import { EntryProvider } from './contexts/EntryContext';
import { usePageContext } from './hooks/usePageContext';
import HomePage from './pages/Home/HomePage';

function App() {
  const { selPage} = usePageContext();

  return (
    <PageProvider>
    <EntryProvider >
      <div className="App">
        <Navigator />
        <Header />
        {
          (selPage === EPortfolioPages.Home) && <HomePage />
        }
        {
          (selPage === EPortfolioPages.Projects) && <ProjectsPage />
        }
        <div className="footer">
          <p>Always <span>be kind</span>.</p>
          <p>Always <span>be honest</span>.</p>
          <p>Always <span>be consistent</span>.</p>
        </div>
      </div>
    </EntryProvider>
    </PageProvider>
    
  )
}

export default App;

