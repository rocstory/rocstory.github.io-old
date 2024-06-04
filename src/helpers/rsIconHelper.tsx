import { ERSIcon } from "../enums/ERSIcons";
import { ERefLinkType } from "../enums/ERefLinkType";
import { ESocialMedia } from "../enums/ESocialMedia";
import { ETag } from "../enums/ETag";

export const getMyContactIconName = (name: ESocialMedia) => {
    switch (name) {
        case ESocialMedia.Github:
            return ERSIcon.Github;
        case ESocialMedia.Discord:
            return ERSIcon.Discord;
        case ESocialMedia.Instagram:
            return ERSIcon.Instagram;
        case ESocialMedia.LinkedIn:
            return ERSIcon.LinkedIn;
        default:
            return ERSIcon.Other;
    }
}

export const getRefLinkIconName = (name: ERefLinkType) => {
    switch (name) {
        case ERefLinkType.RepoLink:
            return ERSIcon.Github;
        case ERefLinkType.DemoLink:
            return ERSIcon.Play;
        default:
            return ERSIcon.Other;
    }
}

export const getIconName = (name: ESocialMedia | ERefLinkType | ETag) => {
    switch (name) {
        case ETag.Css:
            return ERSIcon.CSS;
        case ESocialMedia.Discord:
            return ERSIcon.Discord;

        case ESocialMedia.Github:
        case ERefLinkType.RepoLink:
        case ETag.Github:
            return ERSIcon.Github;

        case ETag.Html:
            return ERSIcon.HTML;

        case ESocialMedia.Instagram:
            return ERSIcon.Instagram;

        case ETag.Javascript:
            return ERSIcon.Javascript;


        case ESocialMedia.LinkedIn:
            return ERSIcon.LinkedIn;

        case ETag.React:
            return ERSIcon.React;

        case ERefLinkType.DemoLink:
            return ERSIcon.Play;

        default:
            return ERSIcon.Other;
    }
}