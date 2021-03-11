import React, { useEffect, useState, useContext } from 'react';
import "./MediaDisplay.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioContext } from "../../../../PortfolioContext";



function MediaDisplay({ medialist }) {
    const { dbConfig } = useContext(PortfolioContext);
    const [index, setIndex] = useState(0);
    const [media, setMedia] = useState(null);
    const [album, setAlbum] = useState(null);
    const { ImageMediaType} = dbConfig;

    useEffect(() => {
        async function loadMedia() {
            if (!medialist || medialist.length === 0) return;  

            setAlbum(medialist);
            let newMedia = generateMedia(medialist[index]);
            setMedia(newMedia);
            setIndex(0);
        }
        loadMedia();
    }, [medialist])

    useEffect(() => {
        function updatedMedia() {
            let newMedia = null;
            try {
                if (medialist.length === 0) throw new Error("Cannot update entry media with an empty list!");
                newMedia = generateMedia(medialist[index]);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setMedia(newMedia);
            }
        }
        updatedMedia();
    }, [index]);


    function generateMedia(media) {
        if (!media) return;
        const { alt, type, url } = media;
        return (
            (type === ImageMediaType) ? <img className="entry-img" src={url} alt={alt} /> : <ReactPlayer className="entry-img" url={url} />)
    }

    function handleUserClick(direction = 1) {
        let nextIndex = index + direction;
        const lastIndex = medialist.length - 1;
        if (nextIndex < 0) nextIndex = lastIndex;
        else if (nextIndex > lastIndex) nextIndex = 0;

        setIndex(nextIndex);
    }

    function handleIndexUpdate(newIndex) {
        setIndex(newIndex);
    }
    // console.log("Testing media display!");

    return (album && media) ? (

        <div className="media-wrapper" >
            <div
                className="media-container"
                onClick={() => { handleUserClick() }}
            >
                {
                    media
                }
            </div>
            <div className="media-indexes">
                {
                    medialist.map((media, ind) =>
                        <IndexBubble myIndex={ind} curIndex={index} handleIndexUpdate={handleIndexUpdate} key={ind} />)
                }
            </div>
        </div>
    ): null;
}

function IndexBubble({ myIndex, curIndex, handleIndexUpdate }) {

    return (
        <span className={`index-bubble ${(myIndex === curIndex) ? 'index-shaded' : ''}`}
            onClick={() => { handleIndexUpdate(myIndex) }}
        >
            <FontAwesomeIcon icon={['fas', 'circle']} />
        </span>
    )

}

export default MediaDisplay;
