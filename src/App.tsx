import React, {useContext} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';

import { EPortfolioPages, PageContext, PageProvider } from "./contexts/PageContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ArticleModal from './components/ArticleModal/ArticleModal';
import { ArticleContext} from './contexts/ArticleContext';
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
        {/* </BrowserRouter> */}
        <div className="footer">
          <p>Always <span>be kind</span></p>
          {/* <span>|</span> */}
          <p className='mid-text'>Always <span>be honest</span></p>
          {/* <span>|</span> */}
          <p>Always <span>be consistent</span></p>
        </div>
        {
          selArticle && 
            <ArticleModal />
        }
      </div> 
  )
}

export default App;

