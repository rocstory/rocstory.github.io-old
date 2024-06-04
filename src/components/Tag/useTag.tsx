import { useEffect, useState } from "react";
import { ETag } from "../../enums/ETag";
import './Tag.scss';
import { getIconName } from "../../helpers/rsIconHelper";
import { ERSIcon } from "../../enums/ERSIcons";


function useTag(name: ETag) {
    const [label, setLabel] = useState<string>('');
    const [iconName, setIconName] = useState<ERSIcon>();
    const [tagClassName, setTagClassName] = useState<string>();

    const getTagLabel = () => {
        switch (name) {
            case ETag.Css:
                return 'CSS';
            case ETag.Html:
                return 'HTML';
            case ETag.Javascript:
                return 'JavaScript';
            case ETag.React:
                return 'React';
            default:
                return '';
        }
    }

    const getTagClassName = () => {
        switch (name) {
            case ETag.Css:
                return 'css';
            case ETag.Html:
                return 'css';
            case ETag.Javascript:
                return 'javascript';
            case ETag.React:
                return 'react';
            default:
                return '';
        }
    }

    useEffect(() => {
        const lbl = getTagLabel();
        const icoName = getIconName(name);
        const className = getTagClassName();
        setLabel(lbl);
        setIconName(icoName);
        setTagClassName(className);

    }, [])


    return {
        label,
        iconName,
        tagClassName
    }
}

export default useTag;