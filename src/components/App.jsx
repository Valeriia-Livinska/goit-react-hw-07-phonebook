import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setContactsFiltration } from 'redux/filterSlice';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/Contactlist';
import { Title, Subtitle } from './App.styled';
import { Box } from './Box';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContactToList = newContact => {
    const contactAlreadyInList = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    contactAlreadyInList
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const deleteContactFromList = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = event => {
    dispatch(setContactsFiltration(event.currentTarget.value));
  };

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
      <Filter onChange={handleFilterChange} />
      <ContactList onDeleteContact={deleteContactFromList} />
    </Box>
  );
};
