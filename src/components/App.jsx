import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/Contactlist';
import { Title, Subtitle } from './App.styled';
import { Box } from './Box';

export const App = () => {
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
      <ContactList />
    </Box>
  );
};
