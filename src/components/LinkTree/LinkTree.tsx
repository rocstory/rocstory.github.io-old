import React, { useEffect, useState } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './LinkTree.scss';
import { ITreeLink } from '../../models/TreeLink';

const dataStore = require("../../dataStore/dataStore")

function LinkTree() {
  const [links, setLinks] = useState<ITreeLink[]>([])

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

export default LinkTree;

