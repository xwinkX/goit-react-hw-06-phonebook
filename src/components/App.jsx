import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import {
  addContacts,
  // removeContacts,
  // filterContacts,
} from 'redux/contactUser/contactUser';
import { useSelector } from 'react-redux';

export default function App() {
  // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.items);
  // const filter = useSelector(state => state.contact.filter);

  const addContact = data => {
    const dataContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    const repeatContacts = contacts.find(elem => elem.name === data.name);

    if (repeatContacts) {
      alert(`${repeatContacts.name} is already in contacts`);
    } else {
      dispatch(addContacts(dataContact));
    }
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
