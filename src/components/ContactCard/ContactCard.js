import React from "react";
import "./ContactCard.scss";
import CardLink from "./CardLink/CardLink";
import { Image } from "react-bootstrap";
import useContactCard from "./useContactCard";
function ContactCard({ contact }) {

    const {
        person,
        role,
        imgUrl,
        name,
        handleImageLoadingError

    } = useContactCard(contact);

    return person && (

        <div
            className="cc-cntr"
        >
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
                <div className="cc-link-cntr">
                    {
                        person.reflinks.map(link =>
                            <CardLink
                                key={link.url}
                                link={link}
                            />)
                    }
                </div>
            </div>

        </div>
    )
};

export default ContactCard;