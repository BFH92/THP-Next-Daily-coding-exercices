import React from 'react'
import MessageContext from './MessageContext'

const withMessage = (Component) => (props) => (
  <MessageContext.Consumer>
    {(message) => <Component {... props} messageData = {message} />}
  </MessageContext.Consumer>
)

export default withMessage;