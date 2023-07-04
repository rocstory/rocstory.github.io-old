import React from "react";
import "./ContactCard.scss";
import { Image, Button, Dropdown } from "react-bootstrap";
import useContactCard from "./useContactCard";
import RSIcon from "../RSIcon/RSIcon";
import { ERSIcon } from "../../enums/ERSIcons";
import ContactLink from "./ContactLink";

export type ContactCardProps = {
    contactId: string,
    role?: string
}

function ContactCard(props: ContactCardProps) {
    const {
        contactId,
        role
    } = props

    const {
        person,
        imgUrl,
        name,
        handleImageLoadingError
    } = useContactCard(contactId);

    return person && (

        <div
            className="cc-cntr shadow"
        >
            <div className={`content-wrapper`}>
                <Image
                    className="cc-image"
                    src={imgUrl}
                    onError={handleImageLoadingError}
                    roundedCircle
                />
                <div
                    className="cc-content"
                >
                    <p className="cc-name cc-details">{name}</p>
                    <p className="cc-role cc-details">{role}</p>
                </div>
            </div>
            <div className={`dropdown-wrapper`} >
                <Dropdown
                    className={`cc-dropdown-toggle`}
                >
                    <Dropdown.Toggle
                        className={`dropdown-trigger`}
                        variant={' '}
                        bsPrefix={' '}
                        as="button"
                    >
                        <RSIcon iconName={ERSIcon.EllipsisH}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            person.reflinks.map((link: any) => 
                                <ContactLink
                                    name={link.name}
                                    type={link.type}
                                    url={link.url}
                                />
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
};

export default ContactCard;