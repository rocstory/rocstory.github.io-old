import React from 'react';

import "./LinkButton.scss";
import RSIcon from '../RSIcon/RSIcon';
import { ITreeLink } from '../../models/TreeLink';
import { ERSIcon } from '../../enums/ERSIcon';
import RSButton from '../RSButton/RSButton';

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
    <RSButton
      className="link-button shadow"
      style={bgColor}
      as="a"
      href={url}
      hasTarget
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
      
    </RSButton>
  )
}

export default LinkButton;
