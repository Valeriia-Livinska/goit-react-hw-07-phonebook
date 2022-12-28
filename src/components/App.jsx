import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/Contactlist';
import { Title, Subtitle } from './App.styled';
import { Box } from './Box';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <ContactForm />

      <Subtitle>contacts</Subtitle>
      <Filter />
      {isLoading && !error && <b>Request is in progress...</b>}
      <ContactList />
    </Box>
  );
};
