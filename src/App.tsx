import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import PageLoader from './components/PageLoader/PageLoader';
import { EPages } from './enums/EPages';
import { EProject } from './enums/EProject';

function App() {
  const [selPage, setSelPage] = useState<EPages>(EPages.Projects);
  const [selContent, setSelContent] = useState<EProject>(EProject.TestProject);

  const handleSelPage = (selectedPage: EPages, content: EProject | undefined = undefined) => {
    setSelPage(selectedPage);

    if (content) {
      setSelContent(content);
    }
  }

  const hideHero = [EPages.ProjectDisplay].includes(selPage);

  return (
    <div className="App">
      <NavBar
        selPage={selPage}
        handleSelPage={handleSelPage}

      />
      {
        !hideHero &&
        <Hero />
      }
      <PageLoader
        page={selPage}
        handleSelPage={handleSelPage}
        selContent={selContent}

      />
    </div>
  );
}

export default App;
