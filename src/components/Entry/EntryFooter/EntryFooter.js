import React from 'react';
import "./EntryFooter.css";
import ContactCard from "../../ContactCard/ContactCard";

function EntryFooter({ entry }) {
    const { summary, notes, acknowledgements, collaborators } = entry;

    return (
        <div className="entry-footer">
            
            <div className="eb-footer">

                <div className="aboutme-container">
                    <h2>About</h2>
                    <hr/>
                    <p>{summary}</p>
                </div>
                
                <div className="highlights-container">
                    <h2>Highlights</h2>
                    <hr/>
                    <ul className="notes-container">
                        {
                            notes ? notes.map( note => <li key={note}>{note}</li>) : null
                        }
                    </ul>
                </div>

                <div className="ack-container">
                    <h2>{`Acknowledgements & Collaborators`}</h2>
                    <hr/>
                    <ul>
                        {
                            acknowledgements ? acknowledgements.map( note => <li key={note}>{note}</li>) : null
                        }
                    </ul>

                    <div className="collaborators-container">
                        {
                            collaborators ? collaborators.map(collab => <ContactCard contact={collab} key={collab.pid} />) : null
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EntryFooter;
