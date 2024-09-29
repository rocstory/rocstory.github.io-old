
import MyContactTrigger from './MyContactTrigger/MyContactTrigger';
import './MyContacts.scss';
import useMyContacts from './useMyContacts';

function MyContacts() {

    const { myContacts } = useMyContacts();

    return (
        <div
            className='my-contacts'
        >
            {
                myContacts.map((contact) =>
                    <MyContactTrigger
                        key={`my-contact-${contact.name}`}
                        name={contact.name}
                        src={contact.src}
                        icon={contact.icon}
                        brandCN={contact.name}
                    />)
            }
        </div>
    )
}

export default MyContacts;