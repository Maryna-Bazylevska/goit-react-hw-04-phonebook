import { List, Text, Button } from "./ContactList.styles";
import PropTypes from "prop-types";
const ContactList = ({ items, onDeleteContact }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <li key={id} className="listStyle">
          <Text className="TodoList__text">
            {name}:{number}
          </Text>
          <Button
            type="button"
            className="TodoList__btn"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};
ContactList.prototype = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
