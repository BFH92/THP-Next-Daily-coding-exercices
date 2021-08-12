import React from 'react'

const Email = (props) => {
  return(
    <a className="btn" href={`mailto:${props.lastName}.${props.firstName}@gmail.com`.toLowerCase()}>Envoyer un message</a>
  )
}

export default Email