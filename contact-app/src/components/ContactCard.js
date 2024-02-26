import React from 'react'
import user from "../images/user.png"

export default function ContactCard(props) {

    const {name, email} = props.contact
  return (
    <div className='item'>
      <img className='ui avatar image' src={user} alt="user" />
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                </div>
                <i 
                className='trash alternate outine icon'
                style={{ color : "red", marginTop : "7px" }}></i>
            </div>
  )
}
