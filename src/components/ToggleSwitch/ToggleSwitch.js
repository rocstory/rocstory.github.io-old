import React from 'react';
import "./ToggleSwitch.css";

function ToggleSwitch(props)
{
    const {selected, toggleSelected} = props
    
    return (
        <div className="toggle-container" onClick={toggleSelected}>
            <div className={`dialog-button ${selected ? "" : "disabled"}`} >
                {selected ? "YES" : "NO"}
            </div>
        </div>
    )
}

export default ToggleSwitch;