import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ContactDetail, DeleteButton } from './ContactItem.styled';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const deleteContactFromList = contactId => {
    dispatch(deleteContact(contactId));
  };

  const normalizedfilter = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedfilter)
  );

  return filteredContacts.map(({ id, name, number }) => {
    return (
      <ContactDetail key={id}>
        <span>
          {name}: {number}
        </span>
        <DeleteButton type="button" onClick={() => deleteContactFromList(id)}>
          Delete
        </DeleteButton>
      </ContactDetail>
    );
  });
};
