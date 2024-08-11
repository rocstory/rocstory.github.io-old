import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import "./ProjectPage.scss";
import "../page.scss";



function ProjectsPage() {

    const visibleProjects: EProject[] = [
        // EProject.TestProject, 
        EProject.ChevEscape,
        EProject.ColonialCarnival,
        EProject.CrayonGITRG,
        EProject.LovelyFeathers,
        EProject.MocapGITRG,
        EProject.PawBytesCafe,
        EProject.RevealingRoc,
        EProject.TwinlandeSuperStore,
    ]

    return (
        <Container
            className='project-page page'
            fluid
        >
            <div className={`project-list-wrapper`}>
                <div className={`project-list`} >
                    {
                        visibleProjects.map((projectName) =>
                            <ProjectCard
                                key={`prj-${projectName}`}
                                name={projectName}
                            />
                        )
                    }
                </div>
            </div>

        </Container>
    )
}

export default ProjectsPage;