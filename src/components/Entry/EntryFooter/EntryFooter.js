import React from 'react';
import "./EntryFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function EntryFooter(props)
{
    return (
        <div className="entry-footer">
                {
                    props.isScrollable ? 
                    <div className="entry-button-container">
                        <button
                            className="entry-button-left clickable"
                            onClick={()=> props.updatePostIndex(-1)}
                        >
                            <FontAwesomeIcon icon={['fas','caret-left']}/>
                        </button>

                        <button
                            className="clickable"
                            onClick={()=> props.updatePostIndex(1)}
                        >
                            <FontAwesomeIcon icon={['fas','caret-right']}/>
                        </button>
                    </div>
                    :
                    null
                }
                {
                    props.reflinks ?
                    <div className="reference-link-container">
                        {
                            props.reflinks ? props.reflinks : null 
                        }
                    </div>
                    :
                    null

                }
        </div>
    )
};


export default EntryFooter;