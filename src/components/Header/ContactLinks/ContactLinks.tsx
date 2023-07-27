import React, { useEffect, useState } from 'react';
import "./ContactLinks.scss";
import Bounce from 'react-reveal/Bounce';
import SocialMediaButton from "../../SocialMediaButton/SocialMediaButton";
import { ISocialLink } from '../../../models/ISocialLink';
import { ESocialMedia } from '../../../enums/ESocialMedia';
import { ETechnology } from '../../../enums/ETechnology';
var dStore = require("../../../dataStore/dataStore");


function ContactLinks() {
    // const [socialLinks, setSocialLinks] = useState<ISocialLink[]>([])

    const socialLinks = [
        {
            name: ESocialMedia.Github,
            src: "https://github.com/rocstory",
            type: ETechnology.Github
        },
        {
            name: ESocialMedia.LinkedIn,
            src: "https://www.linkedin.com/in/malikroc/",
            type: ETechnology.LinkedIn

        },
        {
            name: ESocialMedia.Instagram,
            src: "https://www.instagram.com/rocstory/",
            type: ETechnology.Instagram

        },
        // {
        //     name: ESocialMedia.Twitch,
        //     src: "https://www.twitch.tv/malikmoments",
        //     type: ETechnology.Twitch
        // },
        {
            name: ESocialMedia.Twitter,
            src: "https://twitter.com/rocstory",
            type: ETechnology.Twitter

        }
    ]

    return (
        <Bounce top>
            <div className="social-media-container" >
                {
                    socialLinks.map(link =>
                        <SocialMediaButton
                            link={link}
                            key={`social-media-btn-${link.name}`}
                        />)
                }
            </div>
        </Bounce>
    )
}

export default ContactLinks;