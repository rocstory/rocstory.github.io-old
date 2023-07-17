import React from "react";
import "./ContactCard.scss";
import { Image, Button, Dropdown } from "react-bootstrap";
import RSIcon from "../RSIcon/RSIcon";
import { ERSIcon } from "../../enums/ERSIcon";
import { getIconClassName } from "../../helper/iconStylingHelper";

export type ContactLinkProps = {
    url: string,
    name: string,
    type: ERSIcon
}

function ContactLink ( props : ContactLinkProps) {
    const {
        url,
        name,
        type
    } = props

    const iconClassName = getIconClassName(type)
    return (
            <Dropdown.Item 
                className={`contact-link`}
                href={url}
                target={"_blank"}
                rel={'noopener noreferrer'}
            >
                <span 
                    className={`${iconClassName}`}
                >
                    <RSIcon iconName={type} />
                </span>
                <span>{name}</span>
            </Dropdown.Item>
    )
};

export default ContactLink;