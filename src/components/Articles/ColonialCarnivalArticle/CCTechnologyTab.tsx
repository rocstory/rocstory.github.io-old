import React, { useContext, useState } from 'react';
import { ETechnology } from '../../../enums/ETechnology';
import TechnologyGallery from '../../ArticleModal/TechnologyListing/TechnologyGallery';

type CCTechnologyTabProps = {
    technologies: ETechnology[]
}

function CCTechnologyTab(props: CCTechnologyTabProps) {

    const {
        technologies
    } = props

    return (
        <div className='cc-tech-tab'>
            <div className={`technology-gallery-wrapper`}>
                <TechnologyGallery 
                    technologies={technologies}
                />
            </div>
        </div>
    )
}

export default CCTechnologyTab;

