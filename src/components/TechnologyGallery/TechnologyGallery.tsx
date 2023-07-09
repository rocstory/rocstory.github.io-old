import React from 'react';
import './TechnologyGallery.scss';
import Tech from './Tech/Tech';
import { ETechnology } from '../../enums/ETechnology';
// import { useEntryContext } from '../../../hooks/useEntryContext';


type TechnologyGalleryProps = {
    technologies: ETechnology[],
    center?: boolean
}

function TechnologyGallery(props : TechnologyGalleryProps) {
    const {
        technologies,
        center       
    } = props

    return (
        <div
            className={`technology-gallery ${center ? 'technology-gallery-centered' : ''}`}
        >
            {
                technologies && technologies.length > 0 &&
                technologies.map(tech => 
                    <div
                        className={`tech-container`}
                    >
                        <Tech 
                            techName={tech}
                        />   
                    </div> 
                )
            }

        </div>
    )
}

export default TechnologyGallery;
