import React, { useContext }  from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import { EPortfolioPages, PageContext } from '../../contexts/PageContext';
import "./Navigator.scss"

const Navigator = () => {
    const location = useLocation();
    let curPathArray = location && location.pathname && location.pathname.split(/\//g)
    
    return (
        <Navbar expand="lg" className="main-nav">
            <Container>
                <Navbar.Brand href={`/${EPortfolioPages.Home}`} className={`rs-brand`} >Rocstory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-items">
                    {
                        Object.values(EPortfolioPages).map((page) => {
                            const curPage = curPathArray.indexOf(page);
                            const isSelected = curPage > -1; 
                            return (
                                <Nav.Link 
                                    href={`/${page}`}
                                    className={`nav-item ${isSelected ? 'active' : ''}`}
                                >
                                    {page}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigator;

// return (
//     <Nav className="justify-content-center main-nav">
//         {
//             Object.values(EPortfolioPages).map((page) => {
//                 const isSelected = selPage === page
//                 return <Nav.Item 
//                     className={`${isSelected ? 'active' : ''}`}
//                     onClick={() => { handleSelectedNavItem(page)}}
//                 >
//                     {page}
//                 </Nav.Item>
//             })
//         }
//     </Nav>
// )
