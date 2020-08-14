import React from 'react';
import "./EntryBody.css";
import ReactPlayer from "react-player";
import Tech from '../Tech/Tech';

class EntryBody extends React.Component
{
    generateMediaSource = (media) =>
    {
        let mediaDisplay = null;

        if (media.type)
        {
            mediaDisplay = <ReactPlayer url="https://www.youtube.com/watch?v=ue-jihqNRFs" />
        }
        else
        {
            mediaDisplay =  <img className="entry-img" src={media.media} alt="media"/>
        }

        return (
            mediaDisplay
        )
    };

    generateTechnologies = (techList) =>
    {
        const Techs = techList.map((tech) => <Tech key={tech.name} data={tech} /> )   
        return Techs;
    }

    render()
    {
        return (
            <div className="entry-body">
                <div className="entry-media">
                    {
                        this.generateMediaSource(this.props.posts[this.props.currIndex])
                    }
                </div>

                <div className="entry-description">
                    <div className="entry-summary">
                        {this.props.posts[this.props.currIndex].brief}
                    </div>
                    <div className="technologies-container">
                        {
                            this.props.technologies ? 
                            this.generateTechnologies(this.props.technologies) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default EntryBody;
