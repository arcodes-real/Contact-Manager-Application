import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function AddContact(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleNameChange = (event) =>{
    setName(event.target.value)
  }

  const handleEmailChange = (event) =>{
    setEmail(event.target.value)
  }

  const handleAddContact = (event) =>{
   
    if(name === "" || email === ""){
      alert("All field are mandatory")
      return // exit the function if the 'if block' runs, else a contact card will get created with no name and email
    }
  
    const newContact = { 
      // id : props.contacts.length +1,
      name:name,
      email:email };

    props.addContact(newContact);
    setName("")
    setEmail("")
    alert("Contact added to contact list successfully")
    
    event.preventDefault();
  }
  return (
    <div className='ui main'>
    <br />
      <h2>Add Contact</h2>
      <form 
      className='ui form'
      onSubmit={handleAddContact}>

        <div className='field'>
            <label>Name</label>
            <input 
            onChange={handleNameChange}
            value={name}
            type='text' 
            name='name' 
            placeholder='Name'
             />
        </div>

        <div className='field'>
            <label>Email</label>
            <input 
            onChange={handleEmailChange}
            value={email}
            type='text' 
            name='email' 
            placeholder='Email' />
        </div>
        
        <button
         className='ui button blue'
         type="submit">Add</button>
      </form>
      <br />
      <Link to="/contactlist">
        <button className='ui button blue'>Show Contact List</button>
      </Link>
    </div>
  )
}
