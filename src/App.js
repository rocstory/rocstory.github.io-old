import React, { useEffect, useContext, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Entry from './components/Entry/Entry';
import EntryContainer from "./components/EntryContainer/EntryContainer"; 
import {PortfolioContext} from "./PortfolioContext";
// import WelcomeScreen from  "./components/WelcomeScreen/WelcomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';


var db = require('./database/database');

function App()
{
  const {setDBConfig, entryType, selEntry} = useContext(PortfolioContext);

  useEffect(()=>{

    async function getEntries()
    {
      let config = await db.getDBConfigObj();
      setDBConfig(config);
    }
    getEntries();
  }, [])
  
  return (
    <div className="App">
        <Header />
        <EntryContainer />

        <div className="footer">
          <p>Always <span>be kind</span>.</p>
          <p>Always <span>be honest</span>.</p>
          <p>Always <span>be consistent</span>.</p>
        </div>
    </div>
  )
}

export default App;

