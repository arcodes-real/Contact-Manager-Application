import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

export default function ContactList(props) {
    
    const renderContactList = props.contacts.map((contact,index) => {
        return (
            <ContactCard key={index} contact={contact}  onClicked={props.onChecked} />
        )
    })
  return (
    <div className='ui celled list'>
    <br />
    <h2>Contact List</h2>
      {renderContactList}
      <br />
      <Link to="/addcontact">
      <button className='ui button blue'>Add New Contact</button>
      </Link>
      
    </div>
  )
}
