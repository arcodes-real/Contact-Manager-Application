import React, { useState } from 'react';
import './App.css';

// import components
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {

 const [contacts, setContacts] = useState([]);

 const addNewContact = (newContact) => {
  console.log(newContact)
  setContacts([...contacts, newContact]);
};
 
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContact={addNewContact} />
      <ContactList contacts = {contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
