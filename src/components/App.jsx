 import React, { useState , useEffect} from "react";
 import { nanoid } from "nanoid";
 import ContactForm from './ContactForm';
 import ContactList from "./ContactList";
 import Filter from './Filter';
 import Notification from './Notification';
 import {Wrapper} from './App.styles'

function App() {
const [contacts, setContacts] = useState(()=>{
  return JSON.parse(localStorage.getItem("contacts")) ?? []}
  
);
const [filter, setFilter] = useState ('');

 useEffect(() => {
  window.localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]); 
  

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()),)
  };
  const addContact = ({ name, number })=>{
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.find((item) => item.name === contact.name)) {
      alert(`${name} is already in contacts`)
      return;
    }

    setContacts([contact, ...contacts])
  };
 
      const deleteContact = (contactId) => {
        setContacts(contacts.filter(
            (contact) => contact.id !== contactId
          ),
        );
      };
     const handleChange =(e)=>{
        
      setFilter( e.currentTarget.value );
      }
  return (
    <Wrapper>
       <h1>Phonebook</h1>
       <ContactForm onSubmit={addContact} />
       {contacts.length < 1 ? (
        <Notification text="Contact list is empty" />
      ) : (
        <div>
       <h2>Contacts</h2>
       <Filter value={filter} onChange={handleChange }/>
       <ContactList items={filterContacts()} onDeleteContact={deleteContact}/>
       </div>
      )}
    </Wrapper>
  ); 
}
export default App;