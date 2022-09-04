import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const ContactList = () => {
  const filter = useSelector(state => state.contact.filter);
  const contacts = useSelector(state => state.contact.items);

  const visibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const gettvisibleContact = visibleContact();
   return (
    <ul className={css.ul}>
      {gettvisibleContact.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
         />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
