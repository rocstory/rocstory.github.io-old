

import { EPerson } from '../../enums/EPerson';
import { EProjectRole } from '../../enums/EProjectRole';
import usePerson from '../../hooks/usePerson';

type ContactCardType = {
    personId: EPerson,
    role?: EProjectRole,
}
function ContactCard(props: ContactCardType) {

    const {
        personId,
        role
    } = props

    // const {} = usePerson(personId);

    return (
        <div>

        </div>
    )
}

export default ContactCard;