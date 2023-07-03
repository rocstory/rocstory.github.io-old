import React from 'react';

import { Button } from 'react-bootstrap';
import "./LinkButton.scss";
import RSIcon from '../RSIcon/RSIcon';

interface LinkButtonProps {
  link: any
}

function LinkButton({ link } : LinkButtonProps) {
  const { label, url, icon, color } = link
  const iconType = icon.type;

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
        <RSIcon iconName={iconType} />
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
