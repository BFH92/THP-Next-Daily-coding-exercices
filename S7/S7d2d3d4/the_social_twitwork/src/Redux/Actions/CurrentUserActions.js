import { FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAILED, REGISTER_CURRENT_EMAIL, REGISTER_CURRENT_USERNAME, REGISTER_CURRENT_PASSWORD, REGISTER_CURRENT_DESCRIPTION,SAVE_CURRENT_TOKEN, SAVE_CURRENT_LIKE,DELETE_CURRENT_LIKE  } from '../Types/CurrentUserTypes'

export const FetchCurrentUserRequest = () => {
  return{
    type: FETCH_CURRENT_USER_REQUEST
  }
}

export const FetchCurrentUserSuccess = (user, token) => {
  return{
    type: FETCH_CURRENT_USER_SUCCESS,
    user,
    token
  }
}

export const FetchCurrentUserFailed = (error) => {
  return{
    type: FETCH_CURRENT_USER_FAILED,
    error
  }
}

export const RegisterCurrentEmail = (email) => {
  return{
    type: REGISTER_CURRENT_EMAIL,
    email

  }
}
export const RegisterCurrentUserName = (username) => {
  return{
    type: REGISTER_CURRENT_USERNAME,
    username

  }
}
export const RegisterCurrentPassword = (password) => {
  return{
    type: REGISTER_CURRENT_PASSWORD,
    password

  }
}
export const RegisterCurrentDescription= (description) => {
  return{
    type: REGISTER_CURRENT_DESCRIPTION,
    description

  }
}
export const SaveCurrentToken= (token) => {
  return{
    type: SAVE_CURRENT_TOKEN,
    token

  }
}
export const SaveCurrentLike= (currentLike) => {
  return{
    type: SAVE_CURRENT_LIKE,
    currentLike

  }
}
export const DeleteCurrentLike= (currentLike) => {
  return{
    type: DELETE_CURRENT_LIKE,
    currentLike

  }
}