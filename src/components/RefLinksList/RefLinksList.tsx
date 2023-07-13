import React from 'react';
import { ERSIcon } from '../../enums/ERSIcon';
import { IRefLink } from '../../models/IRefLink';
import RSIcon from '../RSIcon/RSIcon';
import "./RefLinksList.scss";

type RefLinksListProps = {
    refLinks: IRefLink[]; 
}

export function RefLinksList (props: RefLinksListProps) {
    const {
        refLinks
    } = props

    return (
        <ul className={`ref-links`}>
            {
                refLinks.map((link) => {
                    const linkIcon = link.icon ?? ERSIcon.Link;
                    return (
                        <li>
                            <a 
                                href={link.url} 
                                target="_blank"
                                rel="noopener no referrer"
                            >
                                <span className={`link-icon`}>
                                    <RSIcon iconName={linkIcon} />
                                </span>
                                <span className={`link-label`}>
                                    {link.label}
                                </span>
                            </a>
                            
                        </li>
                    )
                })
            }
        </ul>
    )
}