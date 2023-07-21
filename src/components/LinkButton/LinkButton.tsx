import React from 'react';

import { Button } from 'react-bootstrap';
import "./LinkButton.scss";
import RSIcon from '../RSIcon/RSIcon';
import { ITreeLink } from '../../models/TreeLink';
import { ERSIcon } from '../../enums/ERSIcon';

interface LinkButtonProps {
  link: ITreeLink
}

function LinkButton({ link } : LinkButtonProps) {
  const { 
    label,
    url,
    iconName,
    linkColor
  } = link

  

  const bgColor = { backgroundColor: linkColor ?? 'gray'};
  const rsIconName = iconName ?? ERSIcon.Link
  return (
    <Button
      className="link-button shadow"
      style={bgColor}
      as="a"
      href={url}
      target="_blank"
      rel="noopeneer noreferrer"
    >
      <span
        className={'link-icon float-left'}
      >
        <RSIcon iconName={rsIconName} />
      </span>
      <div
        className="link-label-container"
      >
        <span
          className={'link-label'}
        >
          {label}
        </span>
      </div>
      
    </Button>
  )
}

export default LinkButton;
