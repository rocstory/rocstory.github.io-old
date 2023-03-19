import React  from 'react';
import LinkTree from '../../components/LinkTree/LinkTree';
import "./HomePage.scss"
import DiscordServerCard from '../../components/DiscordServerCard/DiscordServerCard';

const HomePage = () => {

    return (
        <div className='hp-container'>
            <DiscordServerCard />
            <LinkTree/>
        </div>
    )
}

export default HomePage