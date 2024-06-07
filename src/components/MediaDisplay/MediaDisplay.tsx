import { Image } from "react-bootstrap";
import "./MediaDisplay.scss";
type MediaDisplayType = {
    featuredImage: string,
    videoSrc?: string,
}
function MediaDisplay(props: MediaDisplayType) {
    const {
        featuredImage,
        videoSrc,
    } = props;
    return (
        <>
            {
                videoSrc ?
                    <div>Some video cmpt here</div>
                    :
                    <Image src={featuredImage} fluid className={`media-display-img`} />
            }
        </>
    )
}

export default MediaDisplay;