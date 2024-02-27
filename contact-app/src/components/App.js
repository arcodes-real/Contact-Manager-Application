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
 
const deleteContact = (id) =>{
  setContacts((prevContacts) =>{
    return prevContacts.filter((contact,index) =>{
      return index !== id
    })
  })
}
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContact={addNewContact} contacts={contacts} />
      <ContactList contacts = {contacts} setContacts={setContacts} onChecked={deleteContact} />
    </div>
  );
}

export default App;
