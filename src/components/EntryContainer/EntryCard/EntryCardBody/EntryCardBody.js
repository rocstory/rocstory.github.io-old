import React from 'react';
import "./EntryCardBody.css";
import ReactPlayer from "react-player/youtube";
import Carousel from 'react-bootstrap/Carousel';
import TechnologyDisplay from './TechnologyDisplay/TechnologyDisplay';
import ContactCard from '../../../ContactCard/ContactCard';



function EntryCardBody({entryPayload}) {
    // const [selEntry, setSelEntry] = useState(null);
    const {startdate, summary, collaborators} = entryPayload;
    const videoUrl = entryPayload.video ? entryPayload.video : null;
    const images = entryPayload.images ? entryPayload.images : null;
    const technologies = entryPayload.tags;
    const notes = entryPayload.notes;

    function compare(personA, personB)
    {
        if (personA.pid < personB.pid)
        {
            return -1;
        }
        if (personB.pid > personB.pid)
        {
            return 1;
        }
        return 0;
    }

    return (
        <div className="card-body" >
            {
                (videoUrl && videoUrl.length > 0) ?
                <div className="video-container">
                    <ReactPlayer 
                        className="entry-img" 
                        url={videoUrl}
                        volume
                        controls
                    />
                </div>
                : null
            }
            {
                (images && images.length > 0) ?

                    <Carousel
                        className="card-carousel"
                        pause='hover'
                    >
                        {
                            images.map(image => 
                                <Carousel.Item 
                                    className="image-item"
                                    // bsPrefix="image-item"
                                >
                                    <img
                                        className="d-block w-100 carousel-img"
                                        src={image.url}
                                        alt={image.alt}
                                    />
                                </Carousel.Item>
                            )
                            
                        }
                    </Carousel>
                :
                null
            }
            {
                technologies && technologies.length ?
                    <TechnologyDisplay technologies={technologies} />
                    :
                    null
            }
            {
                summary ?
                    <div className="summary-container card-cntr">
                        <h4>Summary</h4>
                        <p>{summary}</p>
                    </div>
                    :
                    null
            }
            {
                notes && notes.length > 0 ?
                    <div className="highlights card-cntr">
                        <h4>Highlights</h4>
                        <ul>
                            {
                                notes.map((note, index) => <li key={index}>{note}</li>)
                            }
                        </ul>
                    </div>
                : null

            }
            {
                collaborators && collaborators.length > 0 ?
                    <>
                        <h2 className="collab-label">Collaborator(s)</h2>
                        <div className="collab-container">
                            {
                                collaborators.sort(compare).map(person => <ContactCard contact={person} />)
                            }
                        </div>
                    </>
                    :
                    null
            }
            {
                startdate ?
                    <p className="entry-start-date">Date Started: {startdate ? startdate : null}</p>
                :
                null
            }
        </div>
    ) 
}

export default EntryCardBody;
