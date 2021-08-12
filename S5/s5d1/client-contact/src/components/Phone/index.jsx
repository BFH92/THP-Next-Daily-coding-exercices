import React from 'react'

const Phone = (data) => {
  const {phoneNumber} = data;
  return(
    <a className="btn grid2o2" href={`callto:${phoneNumber}`}>Appeler</a>
  )
}

export default Phone;