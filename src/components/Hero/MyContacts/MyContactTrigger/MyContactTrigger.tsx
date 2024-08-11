
import { Button } from 'react-bootstrap';
import './MyContactTrigger.scss';
import { IMyContact } from '../../../../interfaces/IMyContact';
import RSIcon from '../../../RSIcon/RSIcon';
import { ERSIcon } from '../../../../enums/ERSIcons';
import { useEffect, useState } from 'react';
import { getIconName } from '../../../../helpers/rsIconHelper';

export interface IMyContactTrigger extends IMyContact {
    icon?: string
    brandCN?: string
}

function MyContactTrigger({ name, src, icon, brandCN }: IMyContactTrigger) {
    const [iconName, setIconName] = useState<ERSIcon | undefined>(undefined);



    useEffect(() => {
        const icon = getIconName(name);
        setIconName(icon);
    }, [])

    return (
        <Button
            className={`mctrigger ${brandCN} `}
            bsPrefix={'rsbtn'}
            variant={' '}
            href={src}
            target={'_blank'}
            rel={'noopener noreferrer'}
        >
            {iconName && <RSIcon name={iconName} />}
            {name}

        </Button>
    )
}

export default MyContactTrigger;