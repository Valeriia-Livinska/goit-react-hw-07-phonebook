import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/Contactlist';
import { Title, Subtitle } from './App.styled';
import { Box } from './Box';

const innitialArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const contactsList = window.localStorage.getItem('contacts');

  const [contacts, setContacts] = useState(
    JSON.parse(contactsList) ?? innitialArray);

  const [filter, setFilter] = useState('');

  const addContactToList = newContact => {
    const contactAlreadyInList = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    contactAlreadyInList
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(state => [newContact, ...state]);
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFiletredContacts = () => {
    const normalizedfilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getFiletredContacts();

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      mt={6}
      mb={0}
      mx="auto"
      maxWidth={600}
    >
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContactToList} />

      <Subtitle>contacts</Subtitle>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Box>
  );
};
