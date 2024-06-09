
import { ETag } from '../../enums/ETag';
import { ETagGroup } from '../../enums/ETagGroup';
import { getAllProgramLanguageTags, getAllTechTags, sortTagsAlphabetically } from '../../helpers/tagHelper';
import Tag from '../Tag/Tag';

import "./TagListing.scss";


type TagListingType = {
    tags: ETag[];
    groupBy: ETagGroup,
}

function TagListing(props: TagListingType) {
    const {
        tags,
        groupBy
    } = props

    const filteredTags = sortTagsAlphabetically(getAllTechTags(tags));

    return (
        <div className={`tag-listing`}>
            {
                filteredTags.map(tag => <Tag name={tag} withColor />)
            }

        </div>
    )
}

export default TagListing;