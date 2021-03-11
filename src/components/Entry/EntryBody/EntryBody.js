import React from 'react';
import "./EntryBody.css";
import MediaDisplay from "./MediaDisplay/MediaDisplay";
import TechnologyDisplay from "./TechnologyDisplay/TechnologyDisplay";

function EntryBody({ entry }) {
    const { startdate, medialist, technologies } = entry;

    return (
        <div className="entry-body">
            <div className="eb-header">
                {
                    (startdate && startdate.length !== 0) ? 
                        <span className="date-started">Date Started: {startdate}</span>
                        : null
                }
            </div>

            <div className="eb-body">
                {/* <div className="media-wrapper" > */}
                    <MediaDisplay medialist={medialist} />
                {/* </div> */}
                {
                    technologies ?
                        <div className="techdisplay-wrapper">
                            <TechnologyDisplay technologies={technologies} />
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default EntryBody;
