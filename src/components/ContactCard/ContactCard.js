import React, { useState} from "react";
import "./ContactCard.css";
import CardLink from "./CardLink/CardLink"; 
import defaultImage from '../../assets/default_icon.png';
var util = require('../../helper/utilities');

var dbController = require('../../database/database');

function ContactCard({contact})
{
    const {pid, role} = contact;
    const [person, setPerson] = useState(null);
    const [imgurl, setImgUrl] = useState(null);
    const [name, setName] = useState('');
    // const [reflinks, setRefLinks] = useState(null);

    useState(() => {
        async function getPerson()
        {
            const dbPerson = await dbController.getPerson(pid);
            const imgsrc = dbPerson.imgurl ? dbPerson.imgurl : defaultImage;
            const personName = await util.modifyName(dbPerson.name);
            setPerson(dbPerson);
            setImgUrl(imgsrc);
            setName(personName);
            // setRefLinks(dbPerson.reflinks);
        }
        getPerson();
    }, [pid])


    return person ? (
    <div className="cc-container">
        <div className="cc-img-container imgContainer-circle">
            {
                <img src={imgurl} 
                    alt="contact card icon" 
                    key={pid} 
                />
            }
        </div>

        <div className="cc-info">
            <div className="cc-details" >
                <h3 className="clip-text">{name}</h3>
                <h5 className="clip-text">{role}</h5>
            </div>
            <div className="cc-links">
                {
                    person.reflinks.map(link => <CardLink link={link} key={link.url}/>)
                }
            </div>
        </div>
    </div>
    ) : null;
}; // class

export default ContactCard;