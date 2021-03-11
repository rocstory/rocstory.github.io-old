import React, { useContext, useEffect, useState } from 'react';
import "./EntryHeader.css";
import EntryLink from "./EntryLink/EntryLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioContext } from '../../../PortfolioContext';
var db = require("../../../database/database");
var util = require("../../../helper/utilities");

const SUCCESS_LIKE_STATUS = 'like-succeeded';
const FAILED_LIKE_STATUS = 'like-failed';

function EntryHeader({ entry }) {
    const { likes, name, links } = entry;
    const { entryType } = useContext(PortfolioContext);

    const [isLiked, setIsLiked] = useState(false);
    const [likeStatus, setLikeStatus] = useState('');
    const [numOfLikes, setNumOfLikes] = useState(0);

    async function handleLikedEntry() {
        if (!isLiked) {
            try {
                const collectionName = await util.getCollectionName(entryType);
                const updatedLikesAmount = await db.addLikesToEntry(name, collectionName)
                // setIsLiked(true);
                setNumOfLikes(updatedLikesAmount);
                setLikeStatus(SUCCESS_LIKE_STATUS);
                setIsLiked(true);
            }
            catch (err)
            {
                // likes failed...
                console.error('Failed to add like!');
                setLikeStatus(FAILED_LIKE_STATUS);
            }
        }
    }

    useEffect(() => {
        const loadLikes = async () => {
            setNumOfLikes(likes);
            setIsLiked(false);
            setLikeStatus('');
        }
        loadLikes()
    }, [entry, likes])
    return (
        <div className="entry-header">
            <div className="entry-likes">
                <span id="likes-amnt">{numOfLikes}x</span>
                <span
                    id="likes-icon"
                    className={isLiked ? 'liked' : ''}
                    onClick={handleLikedEntry}
                >
                    {
                        (likeStatus === SUCCESS_LIKE_STATUS) ?
                            <FontAwesomeIcon icon={['fas', 'heart']} />
                            :
                            <>
                                {
                                    (likeStatus === FAILED_LIKE_STATUS) ?
                                        <FontAwesomeIcon icon={['fas', 'heart-broken']} />
                                        :
                                        <FontAwesomeIcon icon={['far', 'heart']} />
                                }
                            </>
                    }
                </span>
            </div>

            <div className="entry-name">
                <p>{name}</p>
            </div>

            <div className="entry-links">
                {
                    links.map(link => <EntryLink link={link}
                        key={link.url}
                    />)
                }
            </div>
        </div>
    )

}

export default EntryHeader;