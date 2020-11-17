import React, {useState} from 'react';
import "./Entry.css";
import EntryBody from './EntryBody/EntryBody';
import EntryFooter from './EntryFooter/EntryFooter';

import Bounce from 'react-reveal/Bounce'; 

function Entry(props)
{
    const [postIndex, setPostIndex] = useState(0); 

    const {content, reflinks, title, technologies} = props.entry

    function updatePostIndex(value){
        let nextIndex = postIndex + value;
        if (nextIndex > content.length - 1)
        {
            nextIndex = 0;
        }
        else if (nextIndex < 0)
        {
            nextIndex = content.length - 1;
        }
        setPostIndex(nextIndex);
    }

    let isScrollable = (content.length > 1)
    return (
        <Bounce top>
            <div className="entry-container">
                <h1 className="entry-title">{title}</h1>

                { content ?
                    <EntryBody 
                        posts={content} 
                        currIndex={postIndex} 
                        technologies={technologies}
                    />
                    : null
                }
                <EntryFooter 
                    isScrollable={isScrollable}  
                    reflinks={reflinks}
                    updatePostIndex={updatePostIndex}/>
            </div>
        </Bounce>
    )
    
}

export default Entry;