import React, { useEffect, useState } from "react";
import "./Header.css";
import ContactLinks from "./ContactLinks/ContactLinks";
import icon from "../../assets/profpic.jpg";
import Image from "react-bootstrap/Image";

var dStore = require("../../dataStore/dataStore");

function Header() {
	const [aboutMe, setAboutMe] = useState(null);
	const [contactLinks, setContactLinks] = useState(null);

	useEffect(() => {
		async function getGeneralData() {
            let { general, contactlinks } = await dStore.getMeData();
            setAboutMe(general);
            setContactLinks(contactlinks);
		}
		getGeneralData();
	}, []);

	return aboutMe && contactLinks ? (
		<div className="header">
			<ContactLinks links={contactLinks} />
			<Image 
                src={icon} 
                roundedCircle
                className="profile-img"
            />
			<div className="header-body-summary">
				<h1 
                    className="my-name"
                >
					{aboutMe.name}
				</h1>
				<div className="titles">
                    {aboutMe.title}
                </div>
			</div>
		</div>
	) : null;
}

export default Header;
