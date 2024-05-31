import { ERSIcon } from "../enums/ERSIcons";
import { ESocialMedia } from "../enums/ESocialMedia";

export const getMyContactIconName = (name: ESocialMedia) => {
    console.log('Icon Name:', name)
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