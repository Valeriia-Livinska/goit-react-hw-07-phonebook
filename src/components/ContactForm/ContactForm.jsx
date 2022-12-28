import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';
import { Form, Input, SubmitButton } from './ContactForm.styled';
import { Box } from 'components/Box';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };

  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const addContactToList = newContact => {
    const contactAlreadyInList = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    contactAlreadyInList
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      // id: nanoid(),
      name,
      number,
    };

    addContactToList(newContact);

    //form reset
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Box justifyContent="space-between">
        <label>
          Name
          <Input
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
      </Box>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
