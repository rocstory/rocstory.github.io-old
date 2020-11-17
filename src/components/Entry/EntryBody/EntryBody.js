import React from 'react';
import "./EntryBody.css";
import ReactPlayer from "react-player";
import Tech from '../Tech/Tech';

import Fade from 'react-reveal/Fade'; 

function EntryBody(props)
{
    function generateMedia(media)
    {
        return (
            media.type ? <ReactPlayer url={media.media} /> 
            : <img className="entry-img" src={media.media} alt="media"/> )
    }
    const {posts,currIndex} = props;
    const {brief} = posts[currIndex]

    return (
        <div className="entry-body">
            <Fade top>
                <div className="entry-media">
                    {
                        generateMedia(posts[currIndex])
                    }
                </div>
            </Fade>
            <div className="entry-description">
                <Fade top>
                    <div className="entry-summary">
                        {brief}
                    </div>
                </Fade>
                {
                    props.technologies ?
                    <div className="technologies-container">
                        {
                            //console.log(`Techs in:`, props.technologies)
                            props.technologies.map((tech) => <Tech key={tech} name={tech}/>) 
                            //<i>Techs exists</i>
                        }
                    </div> : null
                }
            </div>
        </div>
    )
}

export default EntryBody;