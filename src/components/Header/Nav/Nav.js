import React from 'react';
import "./Nav.css";

class Nav extends React.Component
{
    render()
    {
        const prjButtonBg = this.props.entryDisplay ? null : {backgroundColor: '#0fbaf2'};
        const actButtonBg = this.props.entryDisplay ? {backgroundColor: '#0fbaf2'} : null;
        return (
            <div className="tab-container">
                <button
                    onClick={()=>{this.props.setEntry(false)}}
                    style={prjButtonBg}
                    className="clickable">
                        <p>Projects</p>
                </button>

                <button
                    onClick={()=>{this.props.setEntry(true)}}
                    className="clickable activities-btn"
                    style={actButtonBg}>
                        <p>Activities</p>
                </button>
            </div>
        )
    } // render
};

export default Nav;