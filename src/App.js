import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from './appConfig.json';
import LinksPage from './pages/LinksPage/LinksPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Entry from './components/Entry/Entry';
import { EntryProvider } from './contexts/EntryContext';

function App() {
  // const { selPage, selEntry } = useContext(PortfolioContext);
  // const { WebPages } = appConfig

  return (
    <PageProvider>
    <EntryProvider >
      <div className="App">
        <Navigator />
        {/* <Header /> */}
        {/* {
          (selPage === WebPages.linkPage) && <LinksPage />
        }
        {
          (selPage === WebPages.projectPage) && <ProjectsPage />
        }
        {
          (selPage === WebPages.activityPage) && <>TBB</>
        }
        {
          selEntry && <Entry />
        } */}

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

