
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram, faLinkedin, faGithub,
    faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { ERSIcon } from "../../enums/ERSIcons";



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
            default:
                return faQuestionCircle;
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
        }
    }
    useEffect(() => {
        const ico = getRSIcon();
        const iconClassName = getIconClassName();
        // console.log('getting RSIcon:', name, ico)
        setIcon(ico);
        setIconClassName(iconClassName);
    }, [])

    return {
        icon,
        iconClassName
    }
}

export default useRSIcon;