import React, { useEffect, useContext, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import {PortfolioContext} from "./PortfolioContext";
import WelcomeScreen from  "./components/WelcomeScreen/WelcomeScreen";

var db = require('./database/database');
var util = require('./helper/utilities');

function App()
{
  const {setDBConfig, entryType, selEntry} = useContext(PortfolioContext);
  // const [entry, setEntry] = useState(null);

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
        {
          selEntry ?
            <Entry entry={selEntry}/>
          :
          <WelcomeScreen />
        }
        <div className="footer">
          <p>Always be kind. </p>
          <p>Always be honest.</p>
          <p>Always be consistent.</p>
        </div>
    </div>
  )
}

export default App;

