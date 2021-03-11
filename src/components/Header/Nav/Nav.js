import React, { useContext } from 'react';
import "./Nav.css";
import Switch from 'react-switch';
import {PortfolioContext} from '../../../PortfolioContext';

function Nav()
{
    const {entryType, setEntryType} = useContext(PortfolioContext);
    
    function toggleEntryType()
    {
        setEntryType(!entryType);
    }
    console.log("Nav rendering")

    return (
        <div className="nav">
            <div className="entry-toggle-container">
                <span className={entryType ? "inactive" : "active"}>Projects</span>
                <label className="switch-label" htmlFor="entry-switch">
                    <Switch 
                        onChange={toggleEntryType}
                        checked={entryType}
                        offColor="#0fbaf2"
                        onColor="#ffc125"
                        width={48}
                        height={20}
                        uncheckedIcon={null}
                        checkedIcon={null}
                        id="entry-switch"
                    />
                </label>
                <span className={entryType ? "active" : "inactive"}>Activities</span>
            </div>
        </div>
    )
}

export default Nav;