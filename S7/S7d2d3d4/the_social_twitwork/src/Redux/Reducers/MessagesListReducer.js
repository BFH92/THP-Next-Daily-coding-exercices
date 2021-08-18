import { FETCH_POSTS_FAILED, FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST } from "../Types/MessagesListTypes";

const initialStateMessages = {
  loading: false,
  messages: [],
  error: ''
};

const MessagesListReducer= (state = initialStateMessages, action) => {
  switch(action.type) {
    case  FETCH_POSTS_REQUEST:
      return {
         state
        
      };
    case  FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: state.loading = true,
        messages: action.messages
      };
    case  FETCH_POSTS_FAILED:
        return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

export default MessagesListReducer;