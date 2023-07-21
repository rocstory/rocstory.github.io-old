// export interface ITreeLinkIcon {
//     type: string,
//     name: string
// }

import { ERSIcon } from "../enums/ERSIcon";

export interface ITreeLink {
    url: string, 
    label: string,
    iconName: ERSIcon,
    linkColor: string
}