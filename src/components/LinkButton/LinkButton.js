import React, { useEffect, useContext, useState } from 'react';
import './LinkButton.css';

import { Button } from 'react-bootstrap';


function LinkButton({ linkUrl, linkLabel }) {



  return (
    <a
      className="link-button"
    >
      <span>{linkLabel}</span>
    </a>
  )


}

export default LinkButton;


// return (
//   <Button
//     variant={null}
//     className="link-button"
//     size="lg"
//     href={linkUrl}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <span>{linkLabel}</span>
//   </Button>
// )
