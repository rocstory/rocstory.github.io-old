import React, { useEffect, useContext, useState } from 'react';
import './LinkButton.css';

import { Button } from 'react-bootstrap';


function LinkButton({ linkUrl, linkLabel }) {



  return (
    <Button
      variant={null}
      className="link-button"
      size="lg"
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>{linkLabel}</p>
    </Button>
  )
}

export default LinkButton;

