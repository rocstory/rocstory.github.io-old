import React, { useEffect, useState } from 'react';
import "./ContactLinks.scss";
import Bounce from 'react-reveal/Bounce';
import SocialMediaButton from "../../SocialMediaButton/SocialMediaButton";
import { ISocialLink } from '../../../models/ISocialLink';
var dStore = require("../../../dataStore/dataStore");


function ContactLinks()
{
    const [socialLinks, setSocialLinks] = useState<ISocialLink[]>([])

    useEffect(() => {
        async function getContactLinks() {
            const contactLinks = dStore.getSocialLinks();
            setSocialLinks(contactLinks);
        }

        getContactLinks()
    }, [])

    return (
        <Bounce top>
            <div className="social-media-container" >
                {
                    socialLinks.map(link => 
                        <SocialMediaButton 
                            link={link} 
                            key={link.name}
                        />)
                }
            </div>
        </Bounce>
    )
}

export default ContactLinks;