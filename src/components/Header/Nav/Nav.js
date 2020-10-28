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
                <Switch 
                    onChange={handleChange}
                    checked={selected}
                    offColor="#0fbaf2"
                    onColor="#ffc125"
                    width={250}
                    height={75}
                    uncheckedIcon={null}
                    checkedIcon={null}
                />
                <span className={selected ? "active" : "inactive"}>Activities</span>
            </div>
        </div>
    )
}

export default Nav;