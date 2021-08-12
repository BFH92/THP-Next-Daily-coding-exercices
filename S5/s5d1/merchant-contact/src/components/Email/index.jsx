import React from 'react'

const Email = (data) => {

  const {firstName, lastName} = data;

  return(
    <a href={`mailto:${lastName}.${firstName}@gmail.com`.toLowerCase()}>Envoyer un message</a>
  )
}

export default Email