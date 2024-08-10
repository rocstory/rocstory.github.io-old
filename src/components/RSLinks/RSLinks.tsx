import React from 'react';
// import { ERSIcon } from '../../enums/ERSIcon';
// import { IRefLink } from '../../models/IRefLink';
// import RSIcon from '../RSIcon/RSIcon';
import "./RSLinks.scss";
import RSIcon from '../RSIcon/RSIcon';
import { ERSIcon } from '../../enums/ERSIcons';
import { IRSLink } from '../../interfaces/IRSLink';

type RSLinksType = {
    links: IRSLink[];
}

export function RSLinks(props: RSLinksType) {
    const {
        links
    } = props

    return (
        <ul className={`rs-links`}>
            {
                links.map((link) => {
                    const linkIcon = link.icon ?? ERSIcon.Link;
                    return (
                        <li>
                            <a
                                href={link.src}
                                target="_blank"
                                rel="noopener no referrer"
                            >
                                <span className={`link-icon`}>
                                    <RSIcon name={linkIcon} />
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