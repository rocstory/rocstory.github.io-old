import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { EPortfolioPages, PageContext, PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ArticleModal from './components/ArticleModal/ArticleModal';
import { ArticleContext} from './contexts/ArticleContext';
import HomePage from './pages/Home/HomePage';
import ContactLinks from './components/Header/ContactLinks/ContactLinks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // console.log("SelPage:", selPage);
  const {selPage} = useContext(PageContext)
  const {selArticle} = useContext(ArticleContext);
  return (
      <div className="App">
        <BrowserRouter>
          <Navigator />
          <Header />
          <ContactLinks />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path={`/`} element={<HomePage />} />
            <Route path={`/${EPortfolioPages.Home}`} element={<HomePage />} />
            <Route path={`/${EPortfolioPages.Projects}`} element={<ProjectsPage />} />
          </Routes> 
        </BrowserRouter>
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

