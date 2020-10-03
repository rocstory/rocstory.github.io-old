import React from 'react';
import "./EntryFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReferenceLink from "./ReferenceLink/ReferenceLink";

function EntryFooter(props)
{
    const {isScrollable, updatePostIndex, reflinks} = props
    return (
        <div className="entry-footer">
                {
                    isScrollable ? 
                    <div className="entry-button-container">
                        <button
                            className="entry-button-left clickable"
                            onClick={()=> updatePostIndex(-1)}
                        >
                            <FontAwesomeIcon icon={['fas','caret-left']}/>
                        </button>

                        <button
                            className="clickable"
                            onClick={()=> updatePostIndex(1)}
                        >
                            <FontAwesomeIcon icon={['fas','caret-right']}/>
                        </button>
                    </div>
                    :
                    null
                }
                {
                    reflinks ?
                    <div className="reference-link-container">
                        {
                            reflinks.map(link => <ReferenceLink key={link.source} link={link} />)
                        }
                    </div>
                    :
                    null
                }
        </div>
    )
};


export default EntryFooter;