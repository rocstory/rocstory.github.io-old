import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import {db} from './firebase';
//import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
//import Nav from './components/Nav/Nav';

function App(props)
{
  const [entryDisplay, setEntryDisplay] = useState(false);
  const [projects, setProjects] = useState(null);
  const [activities, setActivities] = useState(null);

  const [selected, setSelected] = useState(false);

  function setEntry(value)
  {
    setEntryDisplay(value);
  }

  useEffect(()=>{
    async function getEntries()
    {
      let project_entry = null;
      let activity_entry = null;
      await db.collection('projects').orderBy("index", "desc").get().then( querySnapshot =>{
        const data = querySnapshot.docs.map(doc => doc.data());
        project_entry = data.map((entry) => <Entry key={entry.title} entry={entry} /> );
      });
      
      await db.collection('activities').orderBy("index", "desc").get().then( querySnapshot =>{
        const data = querySnapshot.docs.map(doc => doc.data());
        activity_entry = data.map((entry) => <Entry key={entry.title} entry={entry} /> );
      });
      setProjects(project_entry);
      setActivities(activity_entry);
    }

    getEntries();

  }, [])

  function handleSelectedEntry()
  {
    setSelected(prev => !prev)
  }


  return (
    <div className="App">
        <Header selected={selected} setEntry={setEntry} handleChange={handleSelectedEntry}/>
        {/* <Nav selected={selected} handleChange={handleSelectedEntry}/> */}
        <div className="entry-display">
          {selected ? activities : projects}
        </div>

        <div className="footer">
          <p>Always be kind. </p>
          <p>Always be honest.</p>
          <p>Always be consistent.</p>
        </div>
      </div>
  )
}

export default App;
