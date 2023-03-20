import React, { useEffect, useState } from "react";
import "./Header.scss";
import icon from "../../assets/profpic.jpg";
import backgroundImg from "../../assets/website-background.jpg";
import Image from "react-bootstrap/Image";
import { IPersonalBio } from "../../models/IPersonalBio";

var dStore = require("../../dataStore/dataStore");

function Header() {
	const [aboutMe, setAboutMe] = useState<IPersonalBio | undefined>(undefined);

	useEffect(() => {
		async function getGeneralData() {
			let bio: IPersonalBio = dStore.getPersonalBio();
			setAboutMe(bio);
		}
		getGeneralData();
	}, []);

	return aboutMe ? (
		<div className="header container">
			<div className="row">
				<div className="col rs-background-cntr">
					<Image 
						src={backgroundImg}
						className="rs-background"
						fluid
					/>
				</div>
				<div className="description col position-absolute shadow">
					<Image
						src={icon}
						roundedCircle
						className="profile-img"
					/>
					<div className="header-body-summary">
						<div className="intro">
							{aboutMe.introduction}
						</div>
						
					</div>
				</div>
			</div>
			
		</div>
	) : null;
}

export default Header;
