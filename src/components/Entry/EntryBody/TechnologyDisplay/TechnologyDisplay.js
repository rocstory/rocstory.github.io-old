import React from 'react';
import "./TechnologyDisplay.css";
import Tech from "./Tech/Tech";


function TechnologyDisplay({ technologies }) {

    return (
        <div className="techdisplay-container">
            {
                technologies.map(tech => <Tech name={tech} key={tech}/> )
            }
        </div>
    )
}
export default TechnologyDisplay;
