import { ContactItem } from './ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ onDeleteContact }) => {
  return (
    <ul>
      <ContactItem onDeleteContact={onDeleteContact} />
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
