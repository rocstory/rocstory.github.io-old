import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import {db} from './firebase';

import Bounce from 'react-reveal/Bounce'; 

function App(props)
{
  const [projects, setProjects] = useState(null);
  const [activities, setActivities] = useState(null);
  const [selected, setSelected] = useState(false);


  useEffect(()=>{
    async function getEntries()
    {
      let project_entry = null;
      let activity_entry = null;
      await db.collection('projects').orderBy("index", "desc").get().then( querySnapshot =>{
        const data = querySnapshot.docs.map(doc => doc.data());
        project_entry = data; //data.map((entry) => <Entry key={entry.title} entry={entry} /> );
      });
      
      await db.collection('activities').orderBy("index", "desc").get().then( querySnapshot =>{
        const data = querySnapshot.docs.map(doc => doc.data());
        activity_entry = data; //data.map((entry) => <Entry key={entry.title} entry={entry} /> );
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
        <Header selected={selected} handleChange={handleSelectedEntry}/>
        {
          (activities && projects ) ?

            <div className="entry-display">
                {
                  selected ?
                    activities.map((entry) => <Entry key={entry.title} entry={entry} />)
                    :
                    projects.map((entry) => <Entry key={entry.title} entry={entry} />)
                }
            </div>
          : null
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
