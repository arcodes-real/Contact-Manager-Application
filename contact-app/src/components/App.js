import React, { useEffect, useState } from 'react';
import './App.css';

// import components
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import ContactDetails from './ContactDetails';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

 const LOCAL_STORAGE_KEY = "contacts";
 const [contacts, setContacts] = useState(
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? [])
 );

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

// storing and retriving our contact data to and from localstorage using useEffect, so that our data is stored even after refreshing

// storing the data to localstorage
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  console.log("Saved in local storage")
}, [contacts])

// // retriving the data from localstorage
// useEffect(() => {
//   console.log("Retrive")
//   const retrievedContacts  = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if(retrievedContacts){
//     console.log(retrievedContacts)
//     setContacts(retrievedContacts);
//   } 
// },[])


  return (
    <div className='ui container'>
    
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList contacts = {contacts} setContacts={setContacts} onChecked={deleteContact} />} />
        <Route path='/addcontact' element={<AddContact addContact={addNewContact} contacts={contacts}/>} />
        <Route path='/contactlist' element={<ContactList contacts = {contacts} setContacts={setContacts} onChecked={deleteContact}/>}/>
        <Route path='/contact/:name' element={<ContactDetails />} />
      </Routes>
    </Router>
    
      
      {/* <AddContact addContact={addNewContact} contacts={contacts} />
      <ContactList contacts = {contacts} setContacts={setContacts} onChecked={deleteContact} /> */}
    </div>
  );
}

export default App;
