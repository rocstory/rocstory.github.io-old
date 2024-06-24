import { useEffect, useState } from "react";
import { ETag } from "../../enums/ETag";
import './Tag.scss';
import { getIconName } from "../../helpers/rsIconHelper";
import { ERSIcon } from "../../enums/ERSIcons";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface ITagObj {
    label: string,
    className: string,
}
function useTag(name: ETag) {
    const [label, setLabel] = useState<string>('');
    const [iconName, setIconName] = useState<ERSIcon>();
    const [tagClassName, setTagClassName] = useState<string>();

    const createTagObj = () => {
        let tagObj: ITagObj = {
            label: '',
            className: '',
        }
        switch (name) {
            case ETag.Css:
                tagObj.label = 'CSS';
                tagObj.className = 'css';
                break;
            case ETag.Html:
                tagObj.label = 'HTML';
                tagObj.className = 'html';
                break;
            case ETag.Javascript:
                tagObj.label = 'JavaScript';
                tagObj.className = 'javascript';
                break;
            case ETag.React:
                tagObj.label = 'React';
                tagObj.className = 'react';
                break;
            case ETag.Github:
                tagObj.label = 'Github';
                tagObj.className = 'github';
                break;
            case ETag.Arduino:
                tagObj.label = 'Arduino';
                tagObj.className = 'arduino';
                break;
            case ETag.CSharp:
                tagObj.label = 'C#';
                tagObj.className = 'csharp';
                break;
            case ETag.Cpp:
                tagObj.label = 'C++';
                tagObj.className = "cpp"
                break;
            case ETag.Firebase:
                tagObj.label = "Firebase";
                tagObj.className = "firebase";
                break;
            case ETag.Fritzing:
                tagObj.label = "Fritzing";
                tagObj.className = "fritzing";
                break;
            case ETag.MongoDB:
                tagObj.label = "MongoDB";
                tagObj.className = "mongodb";
                break;
            case ETag.OpenSCAD:
                tagObj.label = "OpenSCAD";
                tagObj.className = "openscad";
                break;
            case ETag.PostgreSQL:
                tagObj.label = "PostgreSQL";
                tagObj.className = "postgresql";
                break;
            case ETag.Python:
                tagObj.label = "Python";
                tagObj.className = "python";
                break;
            case ETag.RaspberryPi:
                tagObj.label = "Raspberry Pi";
                tagObj.className = "raspberrypi";
                break;
            case ETag.Twitter:
                tagObj.label = "Twitter";
                tagObj.className = "twitter";
                break;
            case ETag.TypeScript:
                tagObj.label = "typeScript";
                tagObj.className = "typescript";
                break;
        }
        return tagObj;
    }

    useEffect(() => {
        const icoName = getIconName(name);
        const tagObj = createTagObj();
        setLabel(tagObj.label);
        setIconName(icoName);
        setTagClassName(tagObj.className);

    }, [])


    return {
        label,
        iconName,
        tagClassName
    }
}

export default useTag;