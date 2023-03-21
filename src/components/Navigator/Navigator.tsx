import React, { useContext }  from 'react';
import { Nav } from 'react-bootstrap';

import { EPortfolioPages, PageContext } from '../../contexts/PageContext';
import "./Navigator.scss"

const Navigator = () => {
    const {selPage, changeSelPage} = useContext(PageContext)

    const handleSelectedNavItem = (selNavItem: EPortfolioPages) => {
        changeSelPage(selNavItem);
    }

    return (
        <Nav className="justify-content-center main-nav">
            {
                Object.values(EPortfolioPages).map((page) => {
                    const isSelected = selPage === page
                    return <Nav.Item 
                        className={`${isSelected ? 'active' : ''}`}
                        onClick={() => { handleSelectedNavItem(page)}}
                    >
                        {page}
                    </Nav.Item>
                })
            }
        </Nav>
    )
}

export default Navigator;

