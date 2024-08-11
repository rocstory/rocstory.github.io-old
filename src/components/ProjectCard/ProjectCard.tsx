import { Image } from "react-bootstrap";
import { EProject } from "../../enums/EProject";
// import { DefaultThumbnail, HeroImg } from "../../helpers/imageHelper";
import { IProject } from "../../interfaces/IProject";
import useProject from "../../hooks/useProject";
import "./ProjectCard.scss";
import RefLinkTrigger from "../RefLinkTrigger/RefLinkTrigger";
import { ETag } from "../../enums/ETag";
import Tag from "../Tag/Tag";
import ShowMoreTagsTrigger from "../Tag/ShowMoreTagsTrigger";
import { EPages } from "../../enums/EPages";
import { useContext } from "react";
import { PortfolioContext, PortfolioContextType } from "../../context/PortfolioContext";
import { sortTagsAlphabetically } from "../../helpers/tagHelper";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useViewType from "../../hooks/useViewType";

interface IProjectCard {
    name: EProject,

}

function ProjectCard(props: IProjectCard) {
    const { selProject, handleSelProject, handleSelPage } = useContext(PortfolioContext) as PortfolioContextType;
    const { isCondensedView } = useViewType();
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

    const handleProjectClick = () => {
        handleSelProject(name);
        handleSelPage(EPages.ProjectDisplay);
    }

    let showMoreTags = false;
    let displayableTags: ETag[] = [];
    let popoverTags: ETag[] = [];

    if (isCondensedView) {
        showMoreTags = true;
        popoverTags = sortTagsAlphabetically(tags);
        displayableTags = []
    }
    else {
        const MAX_TAGS_TO_DISPLAY = 3;
        displayableTags = tags && tags.slice(0, MAX_TAGS_TO_DISPLAY);
        displayableTags = sortTagsAlphabetically(displayableTags);

        const hasMoreTags = tags && (tags.length > MAX_TAGS_TO_DISPLAY);
        showMoreTags = hasMoreTags ?? false;
        popoverTags = tags && hasMoreTags ? tags.slice(MAX_TAGS_TO_DISPLAY, tags.length - 1) : [];
        popoverTags = sortTagsAlphabetically(popoverTags);
    }

    return (
        <div
            className='rs-project'
        >
            <div
                className={`prj-thumbnail-wrapper shadow`}
                onClick={handleProjectClick}
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
                    onClick={handleProjectClick}
                >
                    <h1>{title}</h1>
                    <h2>{formatProjectType(type)}</h2>
                    <div
                        className={`prj-short-descr`}
                    // onClick={handleProjectClick}
                    >
                        {shortDescr}
                    </div>
                    <div
                        className={`tag-container`}
                    >
                        {
                            displayableTags.map((tag: ETag) =>
                                <Tag
                                    key={`${name}-${tag}`}
                                    name={tag}
                                />
                            )
                        }
                        {
                            showMoreTags && popoverTags.length > 0 &&
                            <ShowMoreTagsTrigger
                                tags={popoverTags}
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