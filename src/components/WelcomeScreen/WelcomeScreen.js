import React from 'react';
import "./WelcomeScreen.css";
import Bounce from 'react-reveal/Bounce';
import toggleSwitch from '../../assets/blurbs/blurb1.jpg';
import filterBlurb from '../../assets/blurbs/blurb3.jpg';
import entryBlurb from '../../assets/blurbs/blurb2.jpg';
import likeFeature from '../../assets/blurbs/blurb4.jpg';


function WelcomeScreen() {

    return (
        <Bounce top>
            <div className="welcome-screen-container">
                <h1>Welcome!</h1>
                <div className="guide-container">

                    <div >
                        <img src={toggleSwitch} alt="guide image"/>
                    </div>

                    <div >
                        <img src={filterBlurb} alt="guide image"/>
                    </div>

                    <div >
                        <img src={entryBlurb} alt="guide image"/>
                    </div>

                    <div >
                        <img src={likeFeature} alt="guide image"/>
                    </div>
                </div>
            </div>

        </Bounce>
    )

}

export default WelcomeScreen;