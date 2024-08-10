import { ERefLinkType } from "../enums/ERefLinkType";
import { ERSIcon } from "../enums/ERSIcons";

export interface IRSLink {
    src: string,
    icon?: ERSIcon,
    label?: string,
}