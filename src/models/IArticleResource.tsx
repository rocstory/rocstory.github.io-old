import { EArticleResourceType } from "../enums/EArticleResouceType";
import { ERSIcon } from "../enums/ERSIcon";

export interface IArticleResource {
    title: string,
    src: string,
    type: EArticleResourceType,
    iconName?: ERSIcon,
}