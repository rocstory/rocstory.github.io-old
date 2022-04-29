import React, { useEffect, useContext, useState} from 'react';
import { Nav } from 'react-bootstrap';
import { PortfolioContext } from '../../contexts/PortfolioContext';
import appConfig from '../../appConfig';

import "./Navigator.css"

function Navigator()
{
    const {selPage, setSelPage} = useContext(PortfolioContext)
    const {WebPages} = appConfig
    const webPagesArray = Object.values(WebPages)

    const handlePageSelect = (page) =>
    {
        setSelPage(page);
    }

    return (
            <Nav 
                className="nav-cntr justify-content-center"
            >
                {
                    webPagesArray.map(page => 
                        <Nav.Link
                            key={page}
                            className={`${selPage === page ? 'selected' : ''}`}
                            onClick={()=> {handlePageSelect(page)}}
                        >
                            {page}
                        </Nav.Link>
                    )
                }
            </Nav>
    )
}

export default Navigator;

