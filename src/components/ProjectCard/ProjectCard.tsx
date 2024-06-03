import { Image } from "react-bootstrap";
import { EProject } from "../../enums/EProject";
import { DefaultThumbnail, HeroImg } from "../../helpers/imageHelper";
import { IProject } from "../../interfaces/IProject";
import useProject from "../../hooks/useProject";
import "./ProjectCard.scss";
import RefLinkTrigger from "../RefLinkTrigger/RefLinkTrigger";

interface IProjectCard {
    name: EProject

}

function ProjectCard(props: IProjectCard) {
    const {
        name
    } = props

    const {
        title,
        type,
        shortDescr,
        tags,
        thumbnail,
        refLinks
    } = useProject(name);

    return (
        <div
            className='rs-project'
        >
            <div
                className={`prj-thumbnail-wrapper shadow`}
            >
                <Image
                    src={thumbnail}
                    fluid
                />
            </div>

            <div
                className={`prj-descr-wrapper`}
            >
                <div
                    className={`prj-descr`}
                >
                    <h1>{title}</h1>
                    <h2>{type}</h2>
                    <div
                        className={`prj-short-descr`}
                    >
                        {shortDescr}
                    </div>
                    <div
                        className={``}
                    >
                        Tags here
                    </div>
                </div>

                <div
                    className={`ref-links-wrapper`}
                >
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

        </div>
    )
}

export default ProjectCard;