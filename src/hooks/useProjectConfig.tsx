import { useContext, useState, useEffect } from 'react'
import { EProjectId } from '../enums/EProjectId';
import { EProjectTypeId} from '../enums/EProjectTypeId';
import { IProjectMetadata } from '../models/IProjectMetadata';
import { useImageRetriever } from './useImageRetriever';

type ProjectConfigProp = {
    prjMetadata: IProjectMetadata
}

export const useProjectConfig = ({ prjMetadata }: ProjectConfigProp) => {

    const {
        id,
        typeId
    } = prjMetadata

    const {
        twinlandeThumbnail,
        projectDefaultThumbnail,
        chevEscapeThumbnail,
        pawbytesCafeThumbnail,
        colonialCarnivalThumbnail
    } = useImageRetriever()

    const [thumbnail, setThumbnail] = useState(undefined);
    const [prjType, setPrjType] = useState<any>(undefined);

    const getThumbnail = () => {

        switch (id) {
            case EProjectId.TwinlandeSuperStore:
                return twinlandeThumbnail;
            case EProjectId.ChevEscape:
                return chevEscapeThumbnail;
            case EProjectId.PawBytes:
                return pawbytesCafeThumbnail;
            case EProjectId.ColonialCarnival:
                return colonialCarnivalThumbnail
            default:
                return projectDefaultThumbnail;
        }
    }

    const getProjectType = () => {
        
        switch (typeId) {

            case EProjectTypeId.WebDev:
                return "Web Development";
            case EProjectTypeId.EmbeddedSystems:
                return "Embedded Systems";
            default:
                return "Other";
        }
    }

    useEffect(() => {
        const thmbnail = getThumbnail();
        const prjType = getProjectType();

        setThumbnail(thmbnail);
        setPrjType(prjType);

    }, [])


    return {
        thumbnail,
        prjType
    }
}