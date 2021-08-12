import React from 'react'
import Email from '../Email';
import Phone from '../Phone'
const Client = ({data}) => {
  const {firstName, lastName, job, avatar, phoneNumber} = data;

  return (
    <div>
    <li>
      {firstName} {lastName}
    </li>
    <div><p>{job}</p></div>
    <div><img src={avatar} alt={firstName} ></img></div>
    <div>< Email firstName={firstName} lastName={lastName}/></div>
    <div>< Phone phoneNumber={phoneNumber}/></div>
    </div>
  )
}

export default Client;