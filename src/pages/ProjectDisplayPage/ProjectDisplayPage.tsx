import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import "../page.scss";
import useProject from '../../hooks/useProject';
import "./ProjectDisplayPage.scss";
import { PortfolioContext, PortfolioContextType } from '../../context/PortfolioContext';
import { useContext } from 'react';


function ProjectDisplayPage() {
    const { selProject } = useContext(PortfolioContext) as PortfolioContextType;
    const {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        refLinks,
        formatProjectType
    } = useProject(selProject);

    return (
        <Container
            className='pd-page display-page debugr'
            fluid
        >
            <div
                className={'display-header debugb'}
            >
                <div className={`page-controls debugg`}>
                    page controls
                </div>
                <div className={`display-title debugg`}>
                    <h1>{title}</h1>

                    <h2>{formatProjectType(type)}</h2>
                </div>
                <div
                    className='display-ref-links'
                >
                    ref links
                </div>

            </div>
            <div
                className={`display-body`}
            >
                display body

            </div>

        </Container>
    )
}

export default ProjectDisplayPage;