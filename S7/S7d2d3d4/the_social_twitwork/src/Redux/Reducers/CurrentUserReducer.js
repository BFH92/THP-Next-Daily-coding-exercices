import { FETCH_CURRENT_USER_FAILED, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_REQUEST, REGISTER_CURRENT_EMAIL,REGISTER_CURRENT_PASSWORD,REGISTER_CURRENT_USERNAME,REGISTER_CURRENT_DESCRIPTION  } from "../Types/CurrentUserTypes";

const initialStateCurrentUser = {
  username:"nobody",
  description:"",
  email:"",
  password:"",
  error: ''
};

const CurrentUserReducer= (state = initialStateCurrentUser, action) => {
  console.log("Reducer Current USer launched")
  console.log(action)
  switch(action.type) {
    case  FETCH_CURRENT_USER_REQUEST:
      return {
         state
      };
    case  FETCH_CURRENT_USER_SUCCESS:
      return {
        ...state,
        username: action.user.username, 
        description: action.user.description
      }
    case  FETCH_CURRENT_USER_FAILED:
        return {
        ...state,
        error: action.error
      };
    case  REGISTER_CURRENT_EMAIL:
      return{
        ...state,
        email: action.email
      }
    case  REGISTER_CURRENT_PASSWORD:
      return{
        ...state,
        password: action.password
      }
    case  REGISTER_CURRENT_USERNAME:
      return{
        ...state,
        username: action.username
      }
    case  REGISTER_CURRENT_DESCRIPTION:
    return{
      ...state,
      description: action.description
    }

    default:
      return state;
  }
}

export default CurrentUserReducer;