import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Text, Button, Input } from './ContactForm.styles';
class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
export default ContactForm;
