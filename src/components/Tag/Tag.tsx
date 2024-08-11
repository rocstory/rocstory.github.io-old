import { ERSIcon } from "../../enums/ERSIcons";
import { ETag } from "../../enums/ETag";
import RSIcon from "../RSIcon/RSIcon";
import './Tag.scss';
import useTag from "./useTag";

interface ITagCmpt {
    name: ETag,
    withColor?: Boolean,
}
function Tag(props: ITagCmpt) {
    const {
        name, withColor
    } = props

    const { label, iconName, tagClassName } = useTag(name);


    return (
        <div
            className={`rs-tag shadow ${withColor ? tagClassName : ''}`}
        >
            {
                iconName &&
                <RSIcon name={iconName} />
            }
            {
                label &&
                <p>
                    {label}
                </p>
            }
        </div>

    )
}

export default Tag;