import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import PageLoader from './components/PageLoader/PageLoader';
import { EPages } from './enums/EPages';

function App() {
  const [selPage, setSelPage] = useState<EPages>(EPages.Projects);

  const handleSelPage = (selectedPage: EPages) => {
    setSelPage(selectedPage)
  }

  return (
    <div className="App">
      <NavBar
        selPage={selPage}
        handleSelPage={handleSelPage}

      />
      <Hero />
      <PageLoader
        page={selPage}

      />
    </div>
  );
}

export default App;
