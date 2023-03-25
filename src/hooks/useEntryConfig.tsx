import { useContext, useState, useEffect } from 'react'
import { EProjectId } from '../enums/EProjectId';
import { useImageRetriever } from './useImageRetriever';

type EntryConfigProp = {
    entryId: string
}

export const useEntryConfig = ({entryId} : EntryConfigProp) => {

    const [thumbnail, setThumbnail] = useState(undefined);
    const {
        twinlandeThumbnail,
        projectDefaultThumbnail,
        chevEscapeThumbnail,
        pawbytesCafeThumbnail,
        colonialCarnivalThumbnail
    } = useImageRetriever()

    const getThumbnail = (entryId: string) => {

        switch (entryId) {
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

    useEffect(() => {
        const thmbnail = getThumbnail(entryId);

        setThumbnail(thmbnail);
    }, [])


    return {
        thumbnail
    }
}