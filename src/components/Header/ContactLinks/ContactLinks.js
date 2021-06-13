import React from 'react';
import "./ContactLinks.css";
import Bounce from 'react-reveal/Bounce';
import SocialMediaButton from "../../SocialMediaButton/SocialMediaButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from 'react-bootstrap/Button';


function ContactLinks(props)
{
    const {links} = props

    return (
        <Bounce top>
            <div className="contact-container" >
                <a 
                    href={"https://docs.google.com/document/d/1N5P4y4hJz4DHG7X92bZ58lxdTUKaWg2fhr3wJj3rW_8/edit"} 
                    target="_blank" rel="noopener noreferrer"
                >
                    <Button
                        className="resume-btn"
                    >
                        <span>Resume</span>
                    </Button>
                </a>

                <div className="social-media-container" >
                    {
                        links.map(link => <SocialMediaButton link={link} key={link.name}/>)
                    }
                </div>
            </div>
        </Bounce>
    )
}

export default ContactLinks;