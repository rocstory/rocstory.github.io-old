import { useContext, useState, useEffect } from 'react'
import { ERSIcon } from '../../../../enums/ERSIcons';
import { ETechnology } from '../../../../enums/ETechnology';


export const useTech = (techName: ETechnology) => {

    const [iconName, setIconName] = useState(ERSIcon.LightBulb)
    const [iconColor, setIconColor] = useState('black')
    const [secondaryColor, setSecondaryColor] = useState('white')

    const getSecondaryColor = () => {
        switch (techName) {
            case ETechnology.Arduino:
                return 'red';
            case ETechnology.Cpp:
                return 'red';
            case ETechnology.CSharp:
                return 'red';
            case ETechnology.CSS:
                return 'red';
            case ETechnology.Facebook:
                return 'red';
            case ETechnology.Firebase:
                return 'red';
            case ETechnology.Fritzing:
                return 'red';
            case ETechnology.Github:
                return 'red';
            case ETechnology.HTML:
                return 'red';
            case ETechnology.Instagram:
                return 'red';
            case ETechnology.JavaScript:
                return 'red';
            case ETechnology.LinkedIn:
                return 'red';
            case ETechnology.MongoDB:
                return 'red';
            case ETechnology.OpenSCAD:
                return 'red';
            case ETechnology.PostgresSQL:
                return 'red';
            case ETechnology.Python:
                return 'red';
            case ETechnology.RaspberryPi:
                return 'red';
            case ETechnology.React:
                return 'red';
            case ETechnology.Twitch:
                return 'red';
            case ETechnology.Twitter:
                return 'red';
            case ETechnology.TypeScript:
                return 'red';
            case ETechnology.Unity:
                return 'red';
            case ETechnology.Youtube:
                return 'red';
            default:
                return 'white';
        }
    }

    const getIconColor = () => {
        switch (techName) {
            case ETechnology.Arduino:
                return 'red';
            case ETechnology.Cpp:
                return 'red';
            case ETechnology.CSharp:
                return 'red';
            case ETechnology.CSS:
                return 'red';
            case ETechnology.Facebook:
                return 'red';
            case ETechnology.Firebase:
                return 'red';
            case ETechnology.Fritzing:
                return 'red';
            case ETechnology.Github:
                return 'red';
            case ETechnology.HTML:
                return 'red';
            case ETechnology.Instagram:
                return 'red';
            case ETechnology.JavaScript:
                return 'red';
            case ETechnology.LinkedIn:
                return 'red';
            case ETechnology.MongoDB:
                return 'red';
            case ETechnology.OpenSCAD:
                return 'red';
            case ETechnology.PostgresSQL:
                return 'red';
            case ETechnology.Python:
                return 'red';
            case ETechnology.RaspberryPi:
                return 'red';
            case ETechnology.React:
                return 'red';
            case ETechnology.Twitch:
                return 'red';
            case ETechnology.Twitter:
                return 'red';
            case ETechnology.TypeScript:
                return 'red';
            case ETechnology.Unity:
                return 'red';
            case ETechnology.Youtube:
                return 'red';
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
                return 'red';
            case ETechnology.HTML:
                return 'red';
            case ETechnology.Instagram:
                return 'red';
            case ETechnology.JavaScript:
                return 'red';
            case ETechnology.LinkedIn:
                return 'red';
            case ETechnology.MongoDB:
                return 'red';
            case ETechnology.OpenSCAD:
                return 'red';
            case ETechnology.PostgresSQL:
                return 'red';
            case ETechnology.Python:
                return 'red';
            case ETechnology.RaspberryPi:
                return 'red';
            case ETechnology.React:
                return 'red';
            case ETechnology.Twitch:
                return 'red';
            case ETechnology.Twitter:
                return 'red';
            case ETechnology.TypeScript:
                return 'red';
            case ETechnology.Unity:
                return 'red';
            case ETechnology.Youtube:
                return 'red';
        }
    }
    useEffect(() => {

    }, [techName])

    return {
        iconName,
        iconColor,
        secondaryColor
    }
}