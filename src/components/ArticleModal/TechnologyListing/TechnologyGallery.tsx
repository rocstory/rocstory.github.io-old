import React from 'react';
import './TechnologyListing.scss';
import Tech from './Tech/Tech';
import { ETechnology } from '../../../enums/ETechnology';
// import { useEntryContext } from '../../../hooks/useEntryContext';


type TechnologyGalleryProps = {
    technologies: ETechnology[]
}

function TechnologyGallery(props : TechnologyGalleryProps) {
    const {
        technologies        
    } = props
    // const { selEntry } = useEntryContext()
    // const {
    //     tags
    // } = selEntry

    // tags.sort()

    return (
        <div
            className={`technology-gallery`}
        >
            {
                technologies && technologies.length > 0 &&
                technologies.map(tech => 
                    <Tech 
                        techName={tech}
                    />    
                )
            }

        </div>
    )
}

export default TechnologyGallery;
