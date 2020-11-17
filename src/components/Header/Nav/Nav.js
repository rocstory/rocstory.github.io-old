import React from 'react';
import "./Nav.css";
import Switch from 'react-switch';

function Nav(props)
{
    const {selected, handleChange} = props
    
    return (
        <div className="nav">
            
            <div className="entry-toggle-container">
                <span className={selected ? "inactive" : "active"}>Projects</span>
                <label className="switch-label" htmlFor="entry-switch">
                    <Switch 
                        onChange={handleChange}
                        checked={selected}
                        offColor="#0fbaf2"
                        onColor="#ffc125"
                        width={48}
                        height={20}
                        uncheckedIcon={null}
                        checkedIcon={null}
                        id="entry-switch"
                    />
                </label>
                
                <span className={selected ? "active" : "inactive"}>Activities</span>
            </div>
        </div>
    )
}

export default Nav;