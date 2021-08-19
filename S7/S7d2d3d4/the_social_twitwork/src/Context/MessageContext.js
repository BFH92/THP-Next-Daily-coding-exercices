import {createContext} from 'react'

const MessageContext = createContext({onDelete: null, onLike: null, message: null, getLikes: null, setGetLike:null, likes: null})

export default MessageContext;