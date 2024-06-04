import { Image } from "react-bootstrap";
import { EProject } from "../../enums/EProject";
import { DefaultThumbnail, HeroImg } from "../../helpers/imageHelper";
import { IProject } from "../../interfaces/IProject";
import useProject from "../../hooks/useProject";
import "./ProjectCard.scss";
import RefLinkTrigger from "../RefLinkTrigger/RefLinkTrigger";
import { ETag } from "../../enums/ETag";
import Tag from "../Tag/Tag";
import ShowMoreTagsTrigger from "../Tag/ShowMoreTagsTrigger";

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
        refLinks,
        formatProjectType
    } = useProject(name);

    const MAX_TAGS_TO_DISPLAY = 3;
    const displayShowMoreTag = tags && (tags.length > MAX_TAGS_TO_DISPLAY);

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
                className={`prj-descr-wrapper shadow`}
            >
                <div
                    className={`prj-descr`}
                >
                    <h1>{title}</h1>
                    <h2>{formatProjectType(type)}</h2>
                    <div
                        className={`prj-short-descr`}
                    >
                        {shortDescr}
                    </div>
                    <div
                        className={`tag-container`}
                    >
                        {
                            tags.map((tag: ETag) =>
                                <Tag
                                    key={`${name}-${tag}`}
                                    name={tag}
                                />
                            )
                        }
                        {
                            displayShowMoreTag &&
                            <ShowMoreTagsTrigger
                                tags={tags}
                            />
                        }
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