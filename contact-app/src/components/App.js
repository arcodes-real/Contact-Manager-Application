import React from 'react';
import './App.css';

// import components
import Header from "./Header";
import AddContact from "./AddContact"
import ContactList from "./ContactList"

function App() {

  const contacts = [
    {
      id : 1,
      name : "Archisman",
      email : "archis@gmail.com"
    },
    {
      id : 2,
      name : "Deshna",
      email : "deshna@gmail.com"
    },
    {
      id : 3,
      name : "Ayush",
      email : "ayush@gmail.com"
    }
  ]

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
