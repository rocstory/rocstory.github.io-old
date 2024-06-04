
import { faPlay, faPlus, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram, faLinkedin, faGithub,
    faDiscord,
    faCss3,
    faHtml5,
    faJs,
    faReact
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { ERSIcon } from "../../enums/ERSIcons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";



function useRSIcon(name: ERSIcon) {
    const [icon, setIcon] = useState<any>(faQuestionCircle);
    const [iconClassName, setIconClassName] = useState<string | undefined>(undefined);


    const getRSIcon = () => {
        switch (name) {
            case ERSIcon.LinkedIn:
                return faLinkedin
            case ERSIcon.Github:
                return faGithub
            case ERSIcon.Instagram:
                return faInstagram
            case ERSIcon.Discord:
                return faDiscord;
            case ERSIcon.Play:
                return faPlay;
            case ERSIcon.CSS:
                return faCss3;
            case ERSIcon.HTML:
                return faHtml5;
            case ERSIcon.Javascript:
                return faJs;
            case ERSIcon.React:
                return faReact;
            case ERSIcon.Plus:
                return faPlus;
            default:
                return faLightbulb;
        }
    }

    // icon classnames must correspond with the classnames in icons.scss
    const getIconClassName = () => {
        switch (name) {
            case ERSIcon.Github:
                return 'github';
            case ERSIcon.Discord:
                return 'discord';
            case ERSIcon.Instagram:
                return 'instagram';
            case ERSIcon.LinkedIn:
                return 'linkedin';

            case ERSIcon.Play:
                return 'play';
            case ERSIcon.CSS:
                return 'css';
            case ERSIcon.HTML:
                return 'html';
            case ERSIcon.Javascript:
                return 'javascript';
            case ERSIcon.React:
                return 'react';
            default:
                return 'basic';
        }
    }
    useEffect(() => {
        const ico = getRSIcon();
        const iconClassName = getIconClassName();
        setIcon(ico);
        setIconClassName(iconClassName);
    }, [])

    return {
        icon,
        iconClassName,
    }
}

export default useRSIcon;