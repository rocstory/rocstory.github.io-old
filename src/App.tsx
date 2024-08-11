import React, { useContext, useState } from 'react';
// import logo from '../src/assets/imgs/rsicon2.ico';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import PageLoader from './components/PageLoader/PageLoader';
import { EPages } from './enums/EPages';
import { EProject } from './enums/EProject';
import { PortfolioContext, PortfolioContextType } from './context/PortfolioContext';

function App() {
  const { selPage } = useContext(PortfolioContext) as PortfolioContextType;


  const hideHero = [EPages.ProjectDisplay].includes(selPage);

  return (
    <div className="App">
      <NavBar />
      {
        !hideHero &&
        <Hero />
      }
      <PageLoader />
    </div>
  );
}

export default App;
