import React, { useEffect, useContext, useState} from 'react';
import EntryCard from '../../components/EntryCard/EntryCard';
import './ProjectsPage.css';

const dataStore = require("../../dataStore/dataStore")

function ProjectsPage()
{
  const [projects, setProjects] = useState([])

  useEffect(()=>{

    const prjsData = dataStore.getProjectsData();
    setProjects(prjsData)
  }, [])
  
  return (
    <div className="projects-page">
      {
        projects.map(project => 
          <EntryCard
            key={project.index} 
            data={project}
          />)
      }

    </div>
  )
}

export default ProjectsPage;

