import Container from 'react-bootstrap/Container';
import { EProject } from '../../enums/EProject';
import "../page.scss";
import useProject from '../../hooks/useProject';
import "./ProjectDisplayPage.scss";
import { PortfolioContext, PortfolioContextType } from '../../context/PortfolioContext';
import { useContext } from 'react';
import { EProjectType } from '../../enums/EProjectType';
import RefLinkTrigger from '../../components/RefLinkTrigger/RefLinkTrigger';
import PageControls from '../../components/PageControls/PageControls';
import MediaDisplay from '../../components/MediaDisplay/MediaDisplay';


function ProjectDisplayPage() {
    const { selProject } = useContext(PortfolioContext) as PortfolioContextType;
    const {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        featuredImage,
        refLinks,
        formatProjectType
    } = useProject(selProject);

    const hasProjectType = type !== EProjectType.Unknown;

    return (
        <Container
            className='pd-page display-page'
            fluid
        >
            <div
                className={'display-header sticky-header shadow'}
            >
                <PageControls displayBackBtn />

                <div className={`display-title`}>
                    <p className={`title ${hasProjectType ? 'with-type' : ''}`}>{title}</p>
                    {hasProjectType && <p className='type'>{formatProjectType(type)}</p>}
                </div>

                <div className='display-ref-links'>
                    {
                        refLinks.map((refLink) =>
                            <RefLinkTrigger
                                src={refLink.src}
                                type={refLink.type}
                                label={refLink.label}
                            />
                        )
                    }
                </div>

            </div>
            <div
                className={`display-body debugr`}
            >
                <div
                    className='display-start-date'
                >
                    <p> Date Started: April 25th, 2024</p>
                </div>
                {
                    featuredImage &&
                    <div
                        className={`media-display-wrapper shadow`}
                    >
                        <MediaDisplay
                            featuredImage={featuredImage}
                        />

                    </div>
                }


            </div>

        </Container>
    )
}

export default ProjectDisplayPage;