import { Button } from "react-bootstrap";
import { IRefLink } from "../../interfaces/IRefLink";
import { useEffect, useState } from "react";
import { getIconName } from "../../helpers/rsIconHelper";
import { ERSIcon } from "../../enums/ERSIcons";
import RSIcon from "../RSIcon/RSIcon";
import "./RefLinkTrigger.scss";
import { ERefLinkType } from "../../enums/ERefLinkType";


function RefLinkTrigger(props: IRefLink) {
    const {
        src,
        type,
        label
    } = props

    const [iconName, setIconName] = useState<ERSIcon>();
    const [formattedLabel, setFormattedLabel] = useState<any>('');

    const getFormattedLabel = () => {
        switch (type) {
            case ERefLinkType.RepoLink:
                return 'code';
            case ERefLinkType.DemoLink:
                return 'demo';
            case ERefLinkType.OtherLink:
                return 'other';
        }
    }

    useEffect(() => {
        const icon = getIconName(type);
        const fmLabel = getFormattedLabel();
        setIconName(icon);
        setFormattedLabel(fmLabel);
    }, []);


    return (
        <div className={'reflink-trigger-wrapper de'}>
            <Button
                className={`reflink-trigger shadow`}
                bsPrefix={'rsbtn'}
                variant={' '}
                href={src}
                target={'_blank'}
                rel={'noopener noreferrer'}
            >
                {iconName && <RSIcon name={iconName} />}

            </Button>
            <p className="debu">
                {
                    formattedLabel
                }
            </p>
        </div>

    )
}

export default RefLinkTrigger;