import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import "./ProjectPage.scss";
import "../page.scss";

function ProjectsPage() {

    const visibleProjects = [
        EProject.TwinlandeSuperStore,
        EProject.TestProject
    ]

    return (
        <Container
            className='project-page page debugr'
            fluid
        >
            <div
                className={`project-list debugb`}
            >
                {
                    visibleProjects.map((projectName) =>
                        <ProjectCard
                            key={`prj-${projectName}`}
                            name={projectName}
                        />
                    )
                }
            </div>

        </Container>
    )
}

export default ProjectsPage;