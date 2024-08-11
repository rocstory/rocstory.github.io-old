import { OverlayTrigger, Popover } from "react-bootstrap";
import { ERSIcon } from "../../enums/ERSIcons";
import { ETag } from "../../enums/ETag";
import RSIcon from "../RSIcon/RSIcon";
import './Tag.scss';
import useTag from "./useTag";
import './ShowMoreTagsTrigger.scss';


interface ITagCmpt {
    tags: ETag[];
}
function ShowMoreTagsTrigger(props: ITagCmpt) {
    const {
        tags
    } = props
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <ul className={`popover-tags-list scrollable`}>
                    {
                        tags.map(tag =>
                            <TagPopoverCard key={`popover-tag-${tag}`} name={tag} />
                        )
                    }
                </ul>
            </Popover.Body>
        </Popover>
    );


    return (
        <OverlayTrigger
            trigger={'click'}
            placement="right"
            overlay={popover}
        >
            <div
                className={`rs-tag show-more shadow`}
            >
                <RSIcon name={ERSIcon.Plus} />
            </div>
        </OverlayTrigger >

    )
}

export default ShowMoreTagsTrigger;

interface ITagPopoverCard {
    name: ETag
}

const TagPopoverCard = (props: ITagPopoverCard) => {
    const {
        name
    } = props

    const {
        label,
        iconName,
        tagClassName
    } = useTag(name);
    return (
        <li
            className={'tagpop-card'}
        >
            {iconName && <RSIcon name={iconName} />}
            {
                label
            }
        </li>
    )
}