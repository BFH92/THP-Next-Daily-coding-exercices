import React from 'react'
import Email from '../Email';
import Phone from '../Phone'
const Client = ({data}) => {
  const {firstName, lastName, job, avatar, phoneNumber} = data;

  return (
    <div className="container">
    <div className="grid-4x4">
      <div className="grid-1x1">
        <img src={avatar} alt={firstName} ></img>
      </div>
      <div className="grid-1x1">
        <div>
          {firstName} 
          {lastName}
        </div>
      </div>
      <div className="grid-1x1">
        <p>{job}</p>
      </div>
      <div className="grid-1x2">
          < Email firstName={firstName} lastName={lastName}/>
      
          < Phone phoneNumber={phoneNumber}/>
      </div>
    </div>
    </div>
  )
}

export default Client;