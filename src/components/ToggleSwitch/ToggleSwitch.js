import React from 'react';
import "./ToggleSwitch.css";

function ToggleSwitch(props)
{
    const {name} = props
    
    return (
        <div className="toggle-switch">
            <input 
                type="checkbox"
                className="toggle-switch-checkbox"
                name="toggleSwitch"
                id={name}
            />
            <label 
                className="toggle-switch-label"
                htmlFor={name} 
            >
                <span className="toggle-switch-inner" data-yes="Projects" data-no="Activities" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    )
}

export default ToggleSwitch;