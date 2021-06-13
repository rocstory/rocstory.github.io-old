import React, { useEffect, useState } from 'react';
import "./Header.css";
import ContactLinks from "./ContactLinks/ContactLinks";
import icon from "../../assets/profpic.jpg";
import Image from 'react-bootstrap/Image';


var db = require('../../database/database')

function Header(props) {
    const {collection} = props
    const [aboutMe, setAboutMe] = useState(null);
    const [contactLinks, setContactLinks] = useState(null);

    useEffect(() => {
        async function getGeneralData() {
            try
            {
                let {aboutme, contactlinks} = await db.getGeneralData();
                setAboutMe(aboutme);
                setContactLinks(contactlinks);
            }
            catch (error)
            {
                let {aboutme, contactlinks} = await db.getLocalGeneralData();
                setAboutMe(aboutme);
                setContactLinks(contactlinks);
            }
        }
        getGeneralData();
    }, [])

    let nameStyle =
    {
        color: "#ffc125",
        textAlign: "center",
        margin: 0
    }

    return (aboutMe && contactLinks) ? (
        <div className="header">
            <div className="header-body-container">
                <Image src={icon} roundedCircle />
                <div className="header-body-summary">
                    <h1 
                        className="my-name" 
                        style={nameStyle}
                    >
                        {aboutMe.name}
                    </h1>
                    <h3 
                        className="pronunciation" 
                        style={{textAlign: "center", margin: 0}}>
                            {aboutMe.pronounciation}
                    </h3>

                    <div className="titles">
                        Software Engineer
                    </div>
                </div>
            </div>
            
            <ContactLinks links={contactLinks} />
        </div>
    ) : null
}

export default Header;
