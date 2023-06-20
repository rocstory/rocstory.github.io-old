import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { EPortfolioPages, PageContext, PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from './appConfig.json';
import LinksPage from './components/LinkTree/LinkTree';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ArticleModal from './components/ArticleModal/ArticleModal';
import { ArticleContext} from './contexts/ArticleContext';
import { usePageContext } from './hooks/usePageContext';
import HomePage from './pages/Home/HomePage';
import ContactLinks from './components/Header/ContactLinks/ContactLinks';

function App() {
  // console.log("SelPage:", selPage);
  const {selPage} = useContext(PageContext)
  const {selArticle} = useContext(ArticleContext);
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
          selArticle && 
            <ArticleModal />
        }
      </div> 
  )
}

export default App;

