
import { faBoltLightning, faChevronLeft, faDatabase, faFireFlameCurved, faLaptopCode, faLeaf, faLink, faPlay, faPlus, faQuestionCircle, faRobot } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram, faLinkedin, faGithub,
    faDiscord,
    faCss3,
    faHtml5,
    faJs,
    faReact,
    faCuttlefish,
    faPython,
    faRaspberryPi,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { ERSIcon } from "../../enums/ERSIcons";
import { faFileCode, faLightbulb } from "@fortawesome/free-regular-svg-icons";


interface IRSIconObj {
    icon: any,
    className: string
}

function useRSIcon(name: ERSIcon) {
    const [icon, setIcon] = useState<any>(faQuestionCircle);
    const [iconClassName, setIconClassName] = useState<string | undefined>(undefined);


    const getRSIcon = () => {

        let iconObj: IRSIconObj = {
            icon: undefined,
            className: '',
        }

        switch (name) {
            case ERSIcon.LinkedIn:
                iconObj.icon = faLinkedin
                iconObj.className = 'linkedin';
                break;
            case ERSIcon.Github:
                iconObj.icon = faGithub
                iconObj.className = 'github';
                break;
            case ERSIcon.Instagram:
                iconObj.icon = faInstagram
                iconObj.className = 'instagram';
                break;
            case ERSIcon.Discord:
                iconObj.icon = faDiscord;
                iconObj.className = 'discord';
                break;
            case ERSIcon.Play:
                iconObj.icon = faPlay;
                iconObj.className = 'play';
                break;
            case ERSIcon.CSS:
                iconObj.icon = faCss3;
                iconObj.className = 'css';
                break;
            case ERSIcon.HTML:
                iconObj.icon = faHtml5;
                iconObj.className = 'html';
                break;
            case ERSIcon.Javascript:
                iconObj.icon = faJs;
                iconObj.className = 'javascript';
                break;
            case ERSIcon.React:
                iconObj.icon = faReact;
                iconObj.className = 'react';
                break;
            case ERSIcon.Plus:
                iconObj.icon = faPlus;
                iconObj.className = 'plus';
                break;
            case ERSIcon.Firebase:
                iconObj.icon = faFireFlameCurved
                iconObj.className = 'firebase';
                break;
            case ERSIcon.Arduino:
                iconObj.icon = faRobot;
                iconObj.className = 'arduino';
                break;
            case ERSIcon.CSharp:
            case ERSIcon.Cpp:
                iconObj.icon = faCuttlefish;
                iconObj.className = 'cpp';
                break;
            case ERSIcon.Fritzing:
                iconObj.icon = faBoltLightning;
                iconObj.className = 'fritzing';
                break;
            case ERSIcon.MongoDB:
                iconObj.icon = faLeaf;
                iconObj.className = 'mongodb';
                break;
            case ERSIcon.OpenSCAD:
                iconObj.icon = faFileCode;
                iconObj.className = 'openscad';
                break;
            case ERSIcon.PostgreSQL:
                iconObj.icon = faDatabase;
                iconObj.className = 'postgresql';
                break;
            case ERSIcon.Python:
                iconObj.icon = faPython;
                iconObj.className = 'python';
                break;
            case ERSIcon.RaspberryPi:
                iconObj.icon = faRaspberryPi;
                iconObj.className = 'raspberrypi';
                break;
            case ERSIcon.Twitter:
                iconObj.icon = faTwitter;
                iconObj.className = 'twitter';
                break;
            case ERSIcon.TypeScript:
                iconObj.icon = faLaptopCode;
                iconObj.className = 'typescript';
                break;
            case ERSIcon.ChevronLeft:
                iconObj.icon = faChevronLeft;
                iconObj.className = 'chevron-left';
                break;
            case ERSIcon.Link:
                iconObj.icon = faLink;
                iconObj.className = 'rs-icon-link';
                break;
            default:
                iconObj.icon = faLightbulb;
                iconObj.className = 'bs-icon';
        }

        return iconObj;
    }

    // icon classnames must correspond with the classnames in icons.scss

    useEffect(() => {
        const ico = getRSIcon();
        setIcon(ico.icon);
        setIconClassName(ico.className);
    }, [])

    return {
        icon,
        iconClassName,
    }
}

export default useRSIcon;