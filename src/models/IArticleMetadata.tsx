import { EArticleResourceType } from "../enums/EArticleResouceType";
import { ERSIcon } from "../enums/ERSIcon";

export interface IArticleMetadata {
    id: string,
    index: number,
    name: string,
    typeId?: string,
    iconId?: string,
    demoUrl?: string,
    repoUrl?: string,
    caption?: string,
}