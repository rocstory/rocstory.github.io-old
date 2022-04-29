import React from 'react';
import "./ContactLinks.css";
import Bounce from 'react-reveal/Bounce';
import SocialMediaButton from "../../SocialMediaButton/SocialMediaButton";

function ContactLinks(props)
{
    const {links} = props

    return (
        <Bounce top>
            <div className="contact-container" >
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