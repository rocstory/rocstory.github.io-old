import React, { useEffect, useContext, useState} from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import './LinksPage.css';

const dataStore = require("../../dataStore/dataStore")

// import {PortfolioContext} from "./contexts/PortfolioContext";

function LinksPage()
{
  const [links, setLinks] = useState([])

  useEffect(()=>{

    async function getLinks()
    {
      const linksData = dataStore.getLinksData();
      setLinks(linksData)
    }
    getLinks();
  }, [])
  
  return (
    <div className="links-page">
      {
        links.map(link => 
          <LinkButton 
            key={link.url} 
            linkUrl={link.url}
            linkLabel={link.label}
          />)
      }

    </div>
  )
}

export default LinksPage;

