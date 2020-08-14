import React from 'react';
import "./Header.css";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import {db} from '../../firebase';

import HeaderBody from "./HeaderBody/HeaderBody";
import ContactLinks from "./ContactLinks/ContactLinks";
import Nav from "./Nav/Nav";

class Header extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            socialButtons: null,
        }
    }
    componentDidMount()
    {
        db.collection('contactLinks').get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            let socialMediaButtons = null;
            socialMediaButtons = data.map((social) => <SocialMediaButton key={social.type} link={social} /> );

            this.setState( () => 
            { return {
                socialButtons: socialMediaButtons
            }});

        });
    } 

    render()
    {
                
        return (
            <div className="header">
                <HeaderBody/>
                <ContactLinks socialButtons={this.state.socialButtons}/>
                <div className="header-nav-container"> <Nav setEntry={this.props.setEntry} entryDisplay={this.props.entryDisplay}/> </div>
            </div>
        )
    } // render
}

export default Header;
