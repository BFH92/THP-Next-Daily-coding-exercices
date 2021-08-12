import React from 'react'

const Phone = (data) => {
  const {phoneNumber} = data;
  return(
    <a href={`callto:${phoneNumber}`}>Appeler</a>
  )
}

export default Phone;