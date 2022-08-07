import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LinkButton.css';

import { Button } from 'react-bootstrap';


function LinkButton({ link }) {
  const { label, url, icon, color } = link

  const bgColor = { backgroundColor: color, border: color };

  return (
    <Button
      className="link-button"
      style={bgColor}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={'link-icon float-left'}
        >
          <FontAwesomeIcon icon={[icon.type, icon.name]} />
        </span>

        <span
          className={'link-label'}
        >
          {label}
        </span>
      </a>
    </Button>
  )
}

export default LinkButton;
