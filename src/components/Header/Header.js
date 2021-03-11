import React, { useEffect, useState } from 'react';
import "./Header.css";
import HeaderBody from "./HeaderBody/HeaderBody";
import ContactLinks from "./ContactLinks/ContactLinks";
import Nav from "./Nav/Nav";
import EntryPanel from "./EntryPanel/EntryPanel";
var db = require('../../database/database')

function Header(props) {
    const { collection} = props
    const [aboutMe, setAboutMe] = useState(null);
    const [contactLinks, setContactLinks] = useState(null);

    useEffect(() => {
        async function getGeneralData() {
            // console.log("Getting general data");
            let generalData = await db.getGeneralData();
            setAboutMe(generalData.aboutme);
            setContactLinks(generalData.contactlinks);
        }
        getGeneralData();
    }, [])

    // console.log("Header rendering")
    return (aboutMe && contactLinks) ? (
        <div className="header">
            {
                (aboutMe && contactLinks) ?
                    <>
                        <HeaderBody aboutme={aboutMe} />
                        <ContactLinks links={contactLinks} />
                        <Nav collection={collection} />
                        <EntryPanel/>
                    </>
                    :
                    null
            }
        </div>
    ) : null
}

export default Header;
