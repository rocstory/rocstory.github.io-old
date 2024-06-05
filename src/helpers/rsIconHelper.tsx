import { ERSIcon } from "../enums/ERSIcons";
import { ERefLinkType } from "../enums/ERefLinkType";
import { ESocialMedia } from "../enums/ESocialMedia";
import { ETag } from "../enums/ETag";

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
        case ETag.Arduino:
            return ERSIcon.Arduino;
        case ETag.Cpp:
            return ERSIcon.Cpp;
        case ETag.CSharp:
            return ERSIcon.CSharp;

        case ETag.Css:
            return ERSIcon.CSS;

        case ESocialMedia.Discord:
            return ERSIcon.Discord;
        case ETag.Firebase:
            return ERSIcon.Firebase;
        case ETag.Fritzing:
            return ERSIcon.Fritzing;

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

        case ETag.MongoDB:
            return ERSIcon.MongoDB;

        case ETag.OpenSCAD:
            return ERSIcon.OpenSCAD;
        case ETag.PostgreSQL:
            return ERSIcon.PostgreSQL;
        case ETag.Python:
            return ERSIcon.Python;
        case ETag.RaspberryPi:
            return ERSIcon.RaspberryPi;
        case ETag.Twitter:
            return ERSIcon.Twitter;
        case ETag.TypeScript:
            return ERSIcon.TypeScript;
        case ETag.React:
            return ERSIcon.React;

        case ERefLinkType.DemoLink:
            return ERSIcon.Play;

        default:
            return ERSIcon.Other;
    }
}