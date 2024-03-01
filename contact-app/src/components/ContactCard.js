import React from 'react'
import user from "../images/user.png"
// import { Link } from 'react-router-dom'

export default function ContactCard(props) {

    const {name, email} = props.contact

  return (
    <div className='main'>
      <img className='ui avatar image' src={user} alt="user" />
                <div className='content'>
                  {/* <Link to={{pathname:`/contact/${name}` , state:{contact:props.contact}}}> */}
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                  {/* </Link> */}
                </div>
                <i 
                onClick={()=>{props.onClicked(props.id)}}
                className='trash alternate outine icon'
                style={{ color : "red", marginTop : "7px", cursor:"pointer" }}
                onMouseEnter={(e) =>{
                  e.target.style.color ="plum"
                }}
                onMouseLeave={(e) =>{
                  e.target.style.color ="red"
                }}></i>
            </div>
  )
}
