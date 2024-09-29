
import { Children } from 'react';
import { ERSIcon } from '../../enums/ERSIcons';
import { EInfoCardType } from '../../enums/EInfoCardType';
import './InfoCard.scss';

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
        <div className={`info-card-wrapper ${isRightAligned ? 'right-aligned' : ''}`}>
            <div className={`info-card shadow`}>
                <div className={'info-header'}>
                    <h1>{cardTitle}</h1>
                </div>
                <div
                    className={`info-body`}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default InfoCard;