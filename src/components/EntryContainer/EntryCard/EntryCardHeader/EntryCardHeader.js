import React, { useEffect, useState } from 'react';
import "./EntryCardHeader.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import EntryLink from '../EntryLink/EntryLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from 'react-bootstrap/Spinner';
var util = require('../../../../helper/utilities');
var db = require('../../../../dataStore/dataStore');

// var db = require('../../database/database')
const PROJECTS_TYPE = 'projects';
const ACTIVITIES_TYPE = 'activities';

function EntryCardHeader({entryPayload, setSelEntry, entryType, errorEncountered}) {
    // const [selEntry, setSelEntry] = useState(null);
    const {name, links, likes} = entryPayload;
    const [loadingLikes, setLoadingLikes] = useState(false);
    const [entryLikes, setEntryLikes] = useState('0');
    const [likedButtonClicked, setLikeButtonClicked] = useState(false);

    async function updateEntryLikes()
    {
        try
        {
            setLoadingLikes(true);
            const collectionName = await util.getCollectionName(entryType);
            const updatedLikesAmount = await db.addLikesToEntry(name, collectionName);
            const formattedLikes = formatEntryLikes(updatedLikesAmount);
            setEntryLikes(formattedLikes);
            setLoadingLikes(false);
            setLikeButtonClicked(true);
        }
        catch (error)
        {
            console.error(error);
        }
        finally
        {
            setLoadingLikes(false);
            setLikeButtonClicked(true);
        }
        
        
    }

    function formatEntryLikes(likesNum)
    {
        let formattedLikes = likesNum;
        return formattedLikes;
    }

    useEffect(()=>{
         async function loadEntryData()
        {
            let formattedLikes = formatEntryLikes(likes);
            setEntryLikes(formattedLikes);

        }
        loadEntryData();
    },[])

    return (
        <div className="card-header">
            <div className="likes-container">
                <Button 
                    variant={null} 
                    className="back-btn"
                    onClick={()=>{setSelEntry(null)}}
                >
                    <span><FontAwesomeIcon icon={["fas", "arrow-left"]} /></span>
                    <span> Back</span>
                </Button>
                {
                    (entryType === PROJECTS_TYPE) ?
                    <Button 
                        variant="primary" 
                        className="like-btn"
                        disabled={likedButtonClicked || errorEncountered}
                        onClick={()=>{updateEntryLikes()}}

                    >
                        {
                            loadingLikes ?
                                <span className="heart-icon">
                                    <Spinner animation="border" variant="danger" size="sm" />
                                </span>
                            :
                                <span className="heart-icon"><FontAwesomeIcon icon={["fas", "heart"]} /></span>
                            
                        }
                        <Badge variant="light">{entryLikes}</Badge>
                        <span className="sr-only">number of likes</span>
                    </Button>
                    : null 
                }
            </div>
            <span className="card-title">
                {name}
            </span>
            <div className="card-links">
                {
                    links.map(link => <EntryLink link={link} />)
                }
            </div>
        </div>
    ) 
}

export default EntryCardHeader;
