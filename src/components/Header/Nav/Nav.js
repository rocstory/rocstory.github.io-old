import React from 'react';
import "./Nav.css";

function Nav(props)
{
    const prjButtonBg = props.entryDisplay ? null : {backgroundColor: '#0fbaf2'};
    const actButtonBg = props.entryDisplay ? {backgroundColor: '#0fbaf2'} : null;
    return (
        <div className="tab-container">
            <button
                onClick={()=>{props.setEntry(false)}}
                style={prjButtonBg}
                className="clickable">
                    <p>Projects</p>
            </button>

            <button
                onClick={()=>{props.setEntry(true)}}
                className="clickable activities-btn"
                style={actButtonBg}>
                    <p>Activities</p>
            </button>
        </div>
    )
}

export default Nav;