import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function ProjectsPage() {

    const visibleProjects = [
        EProject.TwinlandeSuperStore,
        EProject.TestProject
    ]

    return (
        <Container
            // className='rs-hero'
            fluid
        >
            {
                visibleProjects.map((projectName) =>
                    <ProjectCard
                        key={`prj-${projectName}`}
                        name={projectName}
                    />
                )
            }
        </Container>
    )
}

export default ProjectsPage;