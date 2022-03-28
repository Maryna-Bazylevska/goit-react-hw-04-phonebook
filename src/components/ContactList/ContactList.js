import { List, Text, Button } from './ContactList.styles';
import PropTypes from 'prop-types';
const ContactList = ({ items, onDeleteContact }) => (
  <List>
    {items.map(contact => (
      <li key={contact.id} className="listStyle">
        <Text className="TodoList__text">
          {contact.name}:{contact.number}
        </Text>
        <Button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </Button>
      </li>
    ))}
  </List>
);
ContactList.prototype = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
