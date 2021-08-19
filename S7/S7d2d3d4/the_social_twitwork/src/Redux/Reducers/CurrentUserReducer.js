import { FETCH_CURRENT_USER_FAILED, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_REQUEST, REGISTER_CURRENT_EMAIL,REGISTER_CURRENT_PASSWORD,REGISTER_CURRENT_USERNAME,REGISTER_CURRENT_DESCRIPTION, SAVE_CURRENT_TOKEN,SAVE_CURRENT_LIKE,DELETE_CURRENT_LIKE } from "../Types/CurrentUserTypes";
import Cookies from 'js-cookie'


const token = Cookies.get('token')?true:false

const initialStateCurrentUser = {
  username:"nobody",
  description:"",
  email:"",
  password:"",
  error: '',
  logged: token,
  id: '',
  currentLike: []
};

const CurrentUserReducer= (state = initialStateCurrentUser, action) => {
  console.log("Reducer Messages launched")
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
        description: action.user.description,
        logged: token,
        id: action.user.id,
        email: action.user.email,
        currentLike: ["A"]
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
    case  SAVE_CURRENT_TOKEN:
    return{
      ...state,
      logged: action.token
    }
    case  SAVE_CURRENT_LIKE:
    return{
      ...state,
      currentLike: action.currentLike
    }
    case  DELETE_CURRENT_LIKE:
      return { 
       ...state, 
       currentLike: action.currentLike
      }
  
    default:
      return state;
  }
}

export default CurrentUserReducer;