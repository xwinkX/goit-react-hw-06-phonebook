import ContactItem from 'components/ContactItem/ContactItem';
import css from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ContactList = ({ onDeleteContacts }) => {
  const contacts = useSelector(state => state.contact.items);
  return (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContacts={onDeleteContacts}
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
