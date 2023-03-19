import React  from 'react';
import { Nav } from 'react-bootstrap';
import { usePageContext } from '../../hooks/usePageContext';
import { EPortfolioPages } from '../../contexts/PageContext';
import "./Navigator.scss"

const Navigator = () => {
    const {selPage, setSelPage} = usePageContext();

    const handleSelectedNavItem = (selNavItem: EPortfolioPages) => {
        setSelPage(selNavItem);
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

