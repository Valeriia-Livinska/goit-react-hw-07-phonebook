import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { ContactDetail, DeleteButton } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

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
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </ContactDetail>
    );
  });
};

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
