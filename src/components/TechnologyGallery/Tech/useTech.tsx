import { useContext, useState, useEffect } from 'react'
import { ERSIcon } from '../../../enums/ERSIcons';
import { ETechnology } from '../../../enums/ETechnology';


export const useTech = (techName: ETechnology) => {

    const [iconName, setIconName] = useState<ERSIcon>(ERSIcon.LightBulb)
    const [iconColor, setIconColor] = useState('black')
    const [secondaryColor, setSecondaryColor] = useState('white')

    const getSecondaryColor = () => {
        switch (techName) {
            case ETechnology.Arduino:
                return 'white';
            case ETechnology.Cpp:
                return 'white';
            case ETechnology.CSharp:
                return 'white';
            case ETechnology.CSS:
                return 'white';
            case ETechnology.Facebook:
                return 'white';
            case ETechnology.Firebase:
                return 'white';
            case ETechnology.Fritzing:
                return 'white';
            case ETechnology.Github:
                return 'white';
            case ETechnology.HTML:
                return 'white';
            case ETechnology.Instagram:
                return 'white';
            case ETechnology.JavaScript:
                return 'white';
            case ETechnology.LinkedIn:
                return 'white';
            case ETechnology.MongoDB:
                return 'white';
            case ETechnology.OpenSCAD:
                return 'white';
            case ETechnology.PostgresSQL:
                return 'white';
            case ETechnology.Python:
                return 'white';
            case ETechnology.RaspberryPi:
                return 'white';
            case ETechnology.React:
                return 'white';
            case ETechnology.Twitch:
                return 'white';
            case ETechnology.Twitter:
                return 'white';
            case ETechnology.TypeScript:
                return 'white';
            case ETechnology.Unity:
                return 'white';
            case ETechnology.Youtube:
                return 'white';
            default:
                return 'white';
        }
    }

    const getIconColor = () => {
        switch (techName) {
            case ETechnology.Arduino:
                return '#03C0C1';
            case ETechnology.Cpp:
                return '#0047AB';
            case ETechnology.CSharp:
                return '#0047AB';
            case ETechnology.CSS:
                return '#0fbaf2';
            case ETechnology.Facebook:
                return '#4267B2';
            case ETechnology.Firebase:
                return '#F6820D';
            case ETechnology.Fritzing:
                return '#bc1142';
            case ETechnology.Github:
                return '#7289da';
            case ETechnology.HTML:
                return '#FA4C05';
            case ETechnology.Instagram:
                return '#E1306C';
            case ETechnology.JavaScript:
                return '#F1BB47';
            case ETechnology.LinkedIn:
                return '#007bb5';
            case ETechnology.MongoDB:
                return '#4DB33D';
            case ETechnology.OpenSCAD:
                return 'black';
            case ETechnology.PostgresSQL:
                return '#0064a5';
            case ETechnology.Python:
                return '#306998';
            case ETechnology.RaspberryPi:
                return '#bc1142';
            case ETechnology.React:
                return '#47CDF6';
            case ETechnology.Twitch:
                return '#6441a5';
            case ETechnology.Twitter:
                return '#1DA1F2';
            case ETechnology.TypeScript:
                return '#0064a5';
            case ETechnology.Unity:
                return '#6A82CA';
            case ETechnology.Youtube:
                return '#ff0000';
            default:
                return 'black'
        }
    }

    const getIconName = () => {
        switch (techName) {
            case ETechnology.Arduino:
                return ERSIcon.Robot;
            case ETechnology.Cpp:
                return ERSIcon.CuttleFish;
            case ETechnology.CSharp:
                return ERSIcon.CuttleFish;
            case ETechnology.CSS:
                return ERSIcon.CSS;
            case ETechnology.Facebook:
                return ERSIcon.Facebook;
            case ETechnology.Firebase:
                return ERSIcon.Fire;
            case ETechnology.Fritzing:
                return ERSIcon.Bolt;
            case ETechnology.Github:
                return ERSIcon.Github;
            case ETechnology.HTML:
                return ERSIcon.HTML;
            case ETechnology.Instagram:
                return ERSIcon.Instagram;
            case ETechnology.JavaScript:
                return ERSIcon.JsSquare;
            case ETechnology.LinkedIn:
                return ERSIcon.LinkedIn;
            case ETechnology.MongoDB:
                return ERSIcon.MongoDB;
            case ETechnology.OpenSCAD:
                return ERSIcon.OpenSCAD;
            case ETechnology.PostgresSQL:
                return ERSIcon.Database;
            case ETechnology.Python:
                return ERSIcon.Python;
            case ETechnology.RaspberryPi:
                return ERSIcon.RaspberryPi;
            case ETechnology.React:
                return ERSIcon.React;
            case ETechnology.Twitch:
                return ERSIcon.Twitch;
            case ETechnology.Twitter:
                return ERSIcon.Twitter;
            case ETechnology.TypeScript:
                return ERSIcon.TypeScript;
            case ETechnology.Unity:
                return ERSIcon.Unity;
            case ETechnology.Youtube:
                return  ERSIcon.Youtube;
            default:
                return ERSIcon.QuestionCircle
        }
    }
    useEffect(() => {
        const icoName = getIconName()
        const icoColor = getIconColor()
        const sndColor = getSecondaryColor()

        setIconName(icoName);
        setIconColor(icoColor);
        setSecondaryColor(sndColor);
    }, [techName])

    return {
        iconName,
        iconColor,
        secondaryColor
    }
}