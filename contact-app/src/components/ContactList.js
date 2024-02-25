import React from 'react'

export default function ContactList(props) {
    
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className='item'>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className='trash alternate outine icon'></i>
            </div>
        )
    })
  return (
    <div className='ui celled list'>
      {renderContactList}
    </div>
  )
}
