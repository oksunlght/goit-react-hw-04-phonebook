import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';
import { Container, FormTitle, ContactsTitle } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const contactId = nanoid(5);

    const newContact = {
      id: contactId,
      name,
      number,
    };

    const contactName = contacts.map(contact => contact.name);

    if (contactName.includes(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <Form onSubmit={formSubmitHandler} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={deleteContact}
          />
        ))}
      </ContactList>
    </Container>
  );
};

export default App;
