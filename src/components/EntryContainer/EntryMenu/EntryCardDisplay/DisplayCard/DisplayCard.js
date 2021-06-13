import React, { useEffect, useState } from 'react';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import entryErrorIcon from "../../../../../assets/entryIcon.jpg";

import "./DisplayCard.css";
var util = require("../../../../../helper/utilities.js");


const PROJECTS_TYPE = 'projects';
const ACTIVITIES_TYPE = 'activities';

function DisplayCard({ entry, setSelEntry }) {
    const [imgUrl, setImgUrl] = useState(null);
    let tags = entry.tags;
    
    function handleIconError()
    {
        setImgUrl(entryErrorIcon);
    }

    function generateTagBadge(tagName)
    {
        let tagIcon = util.getTechIcon(tagName);

        return (
            <Badge
                key={tagName}
                variant="primary"
                pill
                className="tag-badge"
                style={{backgroundColor: `${(tagIcon.name !== 'default') ? tagIcon.color : '#333A3D'}`}}
            >{tagName}</Badge>)
    }

    useEffect(() => {
        const imgSrc = (entry.icon.url || entry.icon.url.length > 0 ) ? entry.icon.url : entryErrorIcon; 
        setImgUrl(imgSrc);
    },[])
    


    return entry ? (
        <Card 
            className="dcard"
            onClick={()=>{setSelEntry(entry)}}
        >
            <Card.Img
                variant="top"
                src={imgUrl}
                className="dcard-img"
                onError={handleIconError}
            />
            <Card.Body className="dcard-body">
                <Card.Title className="dcard-title">
                    {entry.name.substring(0,20)}
                    {(entry.name.length > 20) ? '.' : ''}
                </Card.Title>
                <Card.Text className="dcard-text">
                    {entry.caption}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="dcard-footer">
                {
                    tags ?
                    tags.slice(0, 3).map(tagName => generateTagBadge(tagName))
                        : null
                }
                {
                    tags && (tags.length > 3) ?
                    <Badge
                        variant="primary"
                        pill
                        className="tag-badge-more"
                    >+</Badge>
                    : null
                }
            </Card.Footer>
        </Card>
    ) : null
}

export default DisplayCard;
