import { ERSIcon } from "../../enums/ERSIcons";
import { ETag } from "../../enums/ETag";
import RSIcon from "../RSIcon/RSIcon";
import './Tag.scss';
import useTag from "./useTag";

interface ITagCmpt {
    name: ETag
}
function Tag(props: ITagCmpt) {
    const {
        name
    } = props

    const { label, iconName, tagClassName } = useTag(name);


    return (
        <div
            className={`rs-tag shadow ${tagClassName}`}
        >
            {
                iconName &&
                <i>
                    <RSIcon name={iconName} />
                </i>
            }
            {label}
        </div>

    )
}

export default Tag;