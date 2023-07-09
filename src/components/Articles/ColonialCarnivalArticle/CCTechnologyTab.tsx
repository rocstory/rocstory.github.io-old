import React, { useContext, useState } from 'react';
import { ETechnology } from '../../../enums/ETechnology';
import TechnologyGallery from '../../TechnologyGallery/TechnologyGallery';

type CCTechnologyTabProps = {
    technologies: ETechnology[]
}

function CCTechnologyTab(props: CCTechnologyTabProps) {

    const {
        technologies
    } = props

    return (
        <div className='tech-tab'>
            <div
                className={`tech-tab-header`}
            >
                <h2>Technologies & Tools</h2>
                <p>Here are the things that were used to put this project together!</p>

            </div>
            <div className={`technology-gallery-wrapper`}>
                <TechnologyGallery 
                    technologies={technologies}
                    center
                />
            </div>
        </div>
    )
}

export default CCTechnologyTab;

