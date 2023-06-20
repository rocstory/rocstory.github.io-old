import React, { useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import './ProjectsPage.scss';
import { IProjectMetadata } from '../../models/IProjectMetadata';
import projectsMetadata from "../../metadata/projects_metadata.json";

function ProjectsPage() {
  const [projects, setProjects] = useState<IProjectMetadata[]>([])

  
  useEffect(() => {

    const prjsData : IProjectMetadata[] = projectsMetadata;

    prjsData.sort((prjA : IProjectMetadata, prjB : IProjectMetadata) => {
      return prjB.index - prjA.index;
    })

    setProjects(prjsData)

  }, [])
  
  return (
    <div className="projects-page">
      {
        projects.map(project =>
          <ArticleCard
            key={project.id}
            articleData={project}
          />)
      }
    </div>
  )
}

export default ProjectsPage;

