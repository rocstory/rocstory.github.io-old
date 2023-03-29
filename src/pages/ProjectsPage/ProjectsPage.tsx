import React, { useEffect, useState } from 'react';
import EntryCard from '../../components/ArticleCard/ArticleCard';
import './ProjectsPage.scss';
import { IProjectEntry } from '../../models/IProjectEntry';

const dataStore = require("../../dataStore/dataStore")

function ProjectsPage() {
  const [projects, setProjects] = useState<IProjectEntry[]>([])

  useEffect(() => {

    const prjsData = dataStore.getProjectsData();
    prjsData.sort((prjA : IProjectEntry, prjB : IProjectEntry) => {
      return prjB.index - prjA.index;
    })
    setProjects(prjsData)
  }, [])
  
  return (
    <div className="projects-page">
      {

        projects.map(project =>
          <EntryCard
            key={project.id}
            data={project}
          />)
      }
    </div>
  )
}

export default ProjectsPage;

