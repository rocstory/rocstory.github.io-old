import React, { useEffect, useState } from 'react';
import "./Blurb.css";
import toggleSwitch from '../../../assets/blurbs/blurb1.jpg';
import filterBlurb from '../../../assets/blurbs/blurb3.jpg';
import entryBlurb from '../../../assets/blurbs/blurb2.jpg';
import likeFeature from '../../../assets/blurbs/blurb4.jpg';
var appConfig = require('../../../app-config');

function Blurb({ type }) {
    const [image, setImage] = useState(null);

    return image ? (
        <div className="blurb-container">

            <div className="blb-img-container">
                <img 
                    src={image}
                    className="blb-img">
                </img>
            </div>

            <ul className="blb-context">
                <li>Hello world!</li>
            </ul>
        </div>
    ) : null

}

export default Blurb;