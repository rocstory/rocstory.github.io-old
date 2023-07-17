import React, { useContext }  from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

import { EPortfolioPages, PageContext } from '../../contexts/PageContext';
import "./Navigator.scss"

const Navigator = () => {
    const location = '' //useLocation();
    const {selPage, changeSelPage} = useContext(PageContext); 
    let curPage = selPage //location && location && location.split(/\//g)[1]
    const PortfolioPages = Object.values(EPortfolioPages);

    const isPageSelected = (page: any) => {
        
        const doesPageExist = PortfolioPages.indexOf(page) > -1;
        if (doesPageExist) {
            const isCurrentPage = page === curPage || (curPage === '' &&  page === EPortfolioPages.Home)
            return isCurrentPage;
        }
        else  {
            if (page ===  EPortfolioPages.Home && curPage === '') {
                return true;
            }
        }

        return false;
    }

    const handleNavLinkClick = (page: EPortfolioPages) => {
        changeSelPage(page); 
    }
    return (
        <Navbar expand="lg" className="main-nav" variant="dark">
            <Container>
                <Navbar.Brand className={`rs-brand`} onClick={() => handleNavLinkClick(EPortfolioPages.Home)} >Rocstory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-items">
                    {
                        Object.values(EPortfolioPages).map((page) => {
                            const isSelected = isPageSelected(page)
                            return (
                                <Nav.Link 
                                    // href={`/${page}`}
                                    className={`nav-item ${isSelected ? 'active' : ''}`}
                                    onClick={() => handleNavLinkClick(page)}
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