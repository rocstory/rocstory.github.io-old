import React from "react";
import "./ContactCard.scss";
import CardLink from "./CardLink/CardLink";
import { Image, Button, Dropdown } from "react-bootstrap";
import useContactCard from "./useContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RSIcon from "../RSIcon/RSIcon";
import { ERSIcon } from "../../enums/ERSIcons";

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
                    {/* <div className="cc-link-cntr">
                    {
                        person.reflinks.map((link: any) =>
                            <CardLink
                                key={link.url}
                                link={link}
                            />)
                    }
                </div> */}
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
                        <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            person.reflinks.map((link: any) => 
                                <Dropdown.Item 
                                    href={link.url}
                                    target={"_blank"}
                                    rel={'noopener noreferrer'}
                                >
                                    <span><RSIcon iconName={ERSIcon.Github} /></span>
                                    <span>{link.name}</span>
                                </Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
};

export default ContactCard;