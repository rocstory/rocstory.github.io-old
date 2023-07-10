import { ERSIcon } from "../enums/ERSIcon";

const getIconClassName = (iconType : ERSIcon) => {
    switch (iconType) {
        case ERSIcon.Github:
                return 'github';
            case ERSIcon.CuttleFish:
                return 'cuttlefish';
            case ERSIcon.CSS:
                return 'css'; 
            case ERSIcon.HTML:
                return 'html';
            case ERSIcon.JsSquare: 
                return 'javascript';
            case ERSIcon.Python:
                return 'python'
            case ERSIcon.RaspberryPi:
                return 'raspberry-pi'
            case ERSIcon.Twitter:
                return 'twitter'
            case ERSIcon.Twitch:
                return 'twitch'
            case ERSIcon.Instagram:
                return 'instagram'
            case ERSIcon.Facebook:
                return 'facebook'
            case ERSIcon.Youtube:
                return 'youtube'
            case ERSIcon.LinkedIn:
                return 'linkedin';
            case ERSIcon.Unity:
                return 'unity';
            case ERSIcon.Fire:
                return 'firebase';
            default:
                return undefined;
    }
}

const getIconHoverClassName = (iconType : string) => {
    switch (iconType) {
        case ERSIcon.Github:
                return 'github-hb';
            case ERSIcon.Twitter:
                return 'twitter-hb'
            case ERSIcon.Twitch:
                return 'twitch-hb'
            case ERSIcon.Instagram:
                return 'instagram-hb'
            case ERSIcon.Facebook:
                return 'facebook-hb'
            case ERSIcon.Youtube:
                return 'youtube-hb'
            case ERSIcon.LinkedIn:
                return 'linkedin-hb';
            default:
                return undefined;
    }
}
export {
    getIconClassName, 
    getIconHoverClassName
}