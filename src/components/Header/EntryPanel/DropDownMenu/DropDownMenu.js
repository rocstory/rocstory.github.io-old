import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState} from 'react';
import onClickOutside from 'react-onclickoutside';
import Bounce from 'react-reveal/Bounce';

import "./DropDownMenu.css";

function DropDownMenu(props) {
    const { title, items, multiSelect = false, handleFilter, filter } = props
    DropDownMenu.handleClickOutside = () => setOpen(false);

    // const [filter, setFilter] = useState([]); // selection
    const [open, setOpen] = useState(false);

    function handleOnClick(item) {
        // checking for uniqueness 
        if (!filter.some(current => current === item)) {
            if (!multiSelect) {
                // setFilter([item])
                handleFilter([item])
                
            }
            else if (multiSelect) {
                // setFilter([...filter, item])
                handleFilter([...filter, item])
                
            }
        }
        // checking if it is not unique
        else {
            let filterAfterRemoval = filter;
            filterAfterRemoval = filterAfterRemoval.filter(
                current => current !== item
            );
            // setFilter([...filterAfterRemoval]);
            handleFilter([...filterAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if (filter.find(current => current === item)) {
            return true
        }
        return false;
    }

    function toggle(val) {
        setOpen(val);
        if (val)
        {
            // setFilter([]);
            handleFilter([]);
        }
    }

    const actionIcon = open ? ['fas', 'folder-open'] : ['fas', 'folder'];

    return (
        <div className="dd-container entry-panel-chld-height">
            <div
                tabIndex={0}
                className="dd-header"
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header-title">
                    <p className="dd-header-title-bold clip-text">{title}</p>
                </div>

                <div 
                    className={`dd-header-action ${open ? 'open-status' : 'closed-status'}`}
                    // onClick={() => handleClick()}
                >
                    <span>
                        <FontAwesomeIcon icon={actionIcon} />
                    </span>
                </div>
            </div>
            {
                open &&
                (
                    <ul className="dd-list">
                        {items.map(item => (
                            <Bounce top key={item}>
                                <li
                                    className={`dd-list-item`} >
                                    <button
                                        className={`${isItemInSelection(item) ? 'selected' : ''}`}
                                        type="button"
                                        onClick={() => handleOnClick(item)}>
                                        <span>{item}</span>
                                    </button>
                                </li>
                            </Bounce>
                        ))}
                    </ul>
                )
            }

        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => DropDownMenu.handleClickOutside,
}



export default onClickOutside(DropDownMenu, clickOutsideConfig);
