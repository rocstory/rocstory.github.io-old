import { Image } from "react-bootstrap";
import "./MediaDisplay.scss";
import { useState } from "react";
import ReactPlayer from "react-player";

type MediaDisplayType = {
    featuredImage: string,
    videoSrc?: string,
}
function MediaDisplay(props: MediaDisplayType) {
    const {
        featuredImage,
        videoSrc,
    } = props;

    const [hasVideoLoadingErr, setHasVideoLoadingErr] = useState<Boolean>(false);

    const handleVideoPlayerError = () => {
        setHasVideoLoadingErr(true);
    }

    return (
        <>
            {
                videoSrc && !hasVideoLoadingErr ?
                    <div className="player-wrapper">
                        <ReactPlayer
                            className={"react-player"}
                            width={"100%"}
                            height={"100%"}
                            url={videoSrc}
                            controls

                        />
                    </div>
                    :
                    <Image src={featuredImage} fluid className={`media-display-img`} />
            }
        </>
    )
}

export default MediaDisplay;