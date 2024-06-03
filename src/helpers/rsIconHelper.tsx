import { ERSIcon } from "../enums/ERSIcons";
import { ERefLinkType } from "../enums/ERefLinkType";
import { ESocialMedia } from "../enums/ESocialMedia";

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