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
        projectDefaultThumbnail
    } = useImageRetriever()

    const getThumbnail = (entryId: string) => {

        switch (entryId) {
            case EProjectId.TwinlandeSuperStore:
                return twinlandeThumbnail;
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