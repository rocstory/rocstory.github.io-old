import React  from 'react';
import { Nav } from 'react-bootstrap';
import { usePageContext } from '../../hooks/usePageContext';
// import appConfig from '../../appConfig.json';

import "./Navigator.scss"

export enum EPortfolioPages {
    Home = "home",
    Projects = "projects",
    Activities = "activites"
}

const Navigator = () => {
    const {selPage, setSelPage} = usePageContext();

    const handleSelectedNavItem = (selNavItem: EPortfolioPages) => {
        console.log("selPage:", selPage, selNavItem);
        setSelPage(selNavItem);
    }

    return (
        <Nav className="justify-content-center main-nav" activeKey="/home">
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

