import React, { useEffect, useState } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './LinkTree.scss';
import { ITreeLink } from '../../models/TreeLink';
import { ERSIcon } from '../../enums/ERSIcon';

const dataStore = require("../../dataStore/dataStore")

function LinkTree() {
  // const [links, setLinks] = useState<ITreeLink[]>([])

  // useEffect(() => {

  //   async function getLinks() {
  //     const linksData = dataStore.getLinksData();
  //     setLinks(linksData)
  //   }
  //   getLinks();
  // }, [])

  const links : ITreeLink[] = [
    {
      label: "Twinlande Super Store Repository",
      url: "https://github.com/rocstory/twinlande-super-store",
      iconName: ERSIcon.Github,
      linkColor: "#2B8069"
    },
    {
      label: "Twinlande Super Store Website",
      url: "https://github.com/rocstory/twinlande-super-store",
      iconName: ERSIcon.Seedling,
      linkColor: "#2B8069",
    },
    {
      label: "Code & Chill Playlist",
      url: "https://open.spotify.com/playlist/3UwTUe0Y9nTCeRNUK3HK2I?si=2fea85f981e84cb7",
      linkColor: "#1DB954",
      iconName: ERSIcon.Spotify
    }
  ]

  return (
    <div className="link-tree-container ltc-collapsed">
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

