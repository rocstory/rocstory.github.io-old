import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'react-bootstrap';
import { ITreeLink } from '../../models/TreeLink';
import "./LinkButton.scss";

interface LinkButtonProps {
  link: any
}

function LinkButton({ link } : LinkButtonProps) {
  const { label, url, icon, color } = link
  const iconType = icon.type;
  const iconName = icon.name;

  const bgColor = { backgroundColor: color, border: color };

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
        <FontAwesomeIcon icon={[iconType, iconName]} />
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
