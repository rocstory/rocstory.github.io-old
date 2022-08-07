import React, { useEffect, useState } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import './LinksPage.css';

const dataStore = require("../../dataStore/dataStore")

function LinksPage() {
  const [links, setLinks] = useState([])

  useEffect(() => {

    async function getLinks() {
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
            link={link}
          />)
      }

    </div>
  )
}

export default LinksPage;

