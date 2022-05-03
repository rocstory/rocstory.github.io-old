import React, { useState } from "react";
import "./ContactCard.scss";
import CardLink from "./CardLink/CardLink";
import defaultImage from '../../assets/default_icon.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
var util = require('../../helper/utilities');

var dbController = require('../../dataStore/dataStore');

function ContactCard({ contact }) {
    const { pid, role } = contact;
    const [person, setPerson] = useState(null);
    const [imgurl, setImgUrl] = useState(null);
    const [name, setName] = useState('');
    // const [reflinks, setRefLinks] = useState(null);

    function handleImageLoading() {
        setImgUrl(defaultImage);
    }

    useState(() => {
        async function getPerson() {
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


    return person && (

        <div
            className="cc-cntr"
        >
            <Image
                className="cc-image"
                src={imgurl}
                onError={handleImageLoading}
                roundedCircle
            />
            <div
                className="cc-content"
            >
                <p className="cc-name cc-details">{name}</p>
                <p className="cc-role cc-details">{role}</p>
                <div className="cc-link-cntr">
                    {
                        person.reflinks.map(link =>
                            <CardLink
                                key={link.url}
                                link={link}
                            />)
                    }
                </div>
            </div>

        </div>
    )
}; // class

export default ContactCard;