
import { Children } from 'react';
import { ERSIcon } from '../../enums/ERSIcons';
import { EInfoCardType } from '../../enums/EInfoCardType';
import './InfoCard.scss';
import { Card } from 'react-bootstrap';

type InfoCardType = {
    type: EInfoCardType,
    title?: string,
    isRightAligned?: Boolean,
    children: React.ReactNode,


}

const InfoCard: React.FC<InfoCardType> = ({ type, title, isRightAligned, children }) => {

    const getDefaultTitle = () => {
        switch (type) {
            case EInfoCardType.About:
                return 'about';
            case EInfoCardType.Highlights:
                return 'highlights';
            default:
                return type;
        }
    }

    const cardTitle = title ?? getDefaultTitle();


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card.Body>
        </Card>

    )
}

export default InfoCard;