import React from 'react';
import "./EntryBody.css";
import ReactPlayer from "react-player";
import Tech from '../Tech/Tech';

function EntryBody(props)
{
    function generateMedia(media)
    {
        return (
            media.type ? <ReactPlayer url="https://www.youtube.com/watch?v=ue-jihqNRFs" /> 
            : <img className="entry-img" src={media.media} alt="media"/> )
    }
    const {posts,currIndex} = props;
    const {brief} = posts[currIndex]

    return (
        <div className="entry-body">
            <div className="entry-media">
                {
                    generateMedia(posts[currIndex])
                }
            </div>

            <div className="entry-description">
                <div className="entry-summary">
                    {brief}
                </div>
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