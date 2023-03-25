import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { EPortfolioPages, PageContext, PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from './appConfig.json';
import LinksPage from './components/LinkTree/LinkTree';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import Entry from './components/Entry/Entry';
import { EntryContext, EntryProvider } from './contexts/EntryContext';
import { usePageContext } from './hooks/usePageContext';
import HomePage from './pages/Home/HomePage';
import ContactLinks from './components/Header/ContactLinks/ContactLinks';

function App() {
  // console.log("SelPage:", selPage);
  const {selPage} = useContext(PageContext)
  const {selEntry} = useContext(EntryContext);

  return (
      <div className="App">
        <Navigator />
        <Header />
        <ContactLinks />
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
        {
          selEntry && 
            <Entry />
        }
      </div> 
  )
}

export default App;

