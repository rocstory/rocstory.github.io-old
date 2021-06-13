import React, { useState} from "react";
import "./ContactCard.css";
import CardLink from "./CardLink/CardLink"; 
import defaultImage from '../../assets/default_icon.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
var util = require('../../helper/utilities');

var dbController = require('../../database/database');

function ContactCard({contact})
{
    const {pid, role} = contact;
    const [person, setPerson] = useState(null);
    const [imgurl, setImgUrl] = useState(null);
    const [name, setName] = useState('');
    // const [reflinks, setRefLinks] = useState(null);

    function handleImageLoading()
    {
        setImgUrl(defaultImage);
    }

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
        <Card className="cc-container" style={{ width: '18rem' }}>
            <Card.Img 
                className="cc-image" 
                variant="top" 
                src={imgurl} 
                onError={handleImageLoading}
            />
            <Card.Body
                className="cc-body"
            >
                <Card.Title
                    className="cc-name"
                >
                    {name}
                </Card.Title>
                <Card.Text className="cc-role">
                    <span>{role}</span>
                </Card.Text>
                {
                    person.reflinks && person.reflinks.length > 0 ?
                    <div className="cc-reflinks-cntr">
                        {
                            person.reflinks.map( link => <CardLink link={link} key={link.url} />)
                        }
                    </div>
                    :
                    null
                }
            </Card.Body>
        </Card>
    ) : null;
}; // class

export default ContactCard;

// <div className="cc-container">
//         <div className="cc-img-container imgContainer-circle">
//             {
//                 <img src={imgurl} 
//                     alt="contact card icon" 
//                     key={pid} 
//                 />
//             }
//         </div>

//         <div className="cc-info">
//             <div className="cc-details" >
//                 <h3 className="clip-text">{name}</h3>
//                 <h5 className="clip-text">{role}</h5>
//             </div>
//             <div className="cc-links">
//                 {
//                     person.reflinks.map(link => <CardLink link={link} key={link.url}/>)
//                 }
//             </div>
//         </div>
//     </div>
//     ) : null;