
import { ETag } from '../../enums/ETag';
import { ETagGroup } from '../../enums/ETagGroup';
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

    return (
        <div className={`tag-listing`}>
            {
                tags.map(tag => <Tag name={tag} withColor />)
            }

        </div>
    )
}

export default TagListing;