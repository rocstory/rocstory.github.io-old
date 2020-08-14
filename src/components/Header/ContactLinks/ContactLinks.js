import React from 'react';
import "./ContactLinks.css";

class ContactLinks extends React.Component
{

    render()
    {
        return (
            <div className="contact-container" >
                <a 
                    href={"https://docs.google.com/document/d/1N5P4y4hJz4DHG7X92bZ58lxdTUKaWg2fhr3wJj3rW_8/edit"} 
                    target="_blank" rel="noopener noreferrer"
                >
                    <button id="resume-btn">Resume</button>
                </a>

                <div className="social-media-container" >
                    {this.props.socialButtons}
                </div>
            </div>
        )
    }
};

export default ContactLinks;