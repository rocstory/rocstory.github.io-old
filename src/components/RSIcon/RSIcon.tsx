import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useRSIcon from "./useRSIcon";
import { ERSIcon } from "../../enums/ERSIcons";
import "../../styling/icons.scss";


export interface IRSIcon {
    name: ERSIcon
}

function RSIcon({ name }: IRSIcon) {

    const { icon, iconClassName } = useRSIcon(name);

    return icon && (
        <i className={`rsIcon ${iconClassName ? iconClassName : ''}`}>
            <FontAwesomeIcon icon={icon} />
        </i>
    )
}

export default RSIcon;