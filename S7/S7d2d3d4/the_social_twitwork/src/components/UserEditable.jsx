import React from 'react';
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess,RegisterCurrentUserName, RegisterCurrentDescription } from '../Redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const UserEditable = () => {
  // if userName
  const history = useHistory()
  const Token = Cookies.get('token')
  const dispatch = useDispatch();
  const email = useSelector(state => state.currentuser.email)
  const username = useSelector(state => state.currentuser.username)
  const password = useSelector(state => state.currentuser.password)
  const description = useSelector(state => state.currentuser.description)

  const [UserNameInput, setUsernameInput] =  useState(username);
  const [DescriptionInput, setDescriptionInput] =  useState(description);
  
  const data = {
    username: UserNameInput,
    description: DescriptionInput
  } 

  const SaveUserName=(e) => {
    setUsernameInput(e.target.value)
  }
  const SaveUserDescription=(e) => {
    setDescriptionInput(e.target.value)
  }
  const UpdateUserProfile = () => { 

  return (dispatch) => {
    dispatch(RegisterCurrentUserName(UserNameInput))
    dispatch(RegisterCurrentDescription(DescriptionInput))
    dispatch(FetchCurrentUserRequest());

    fetch('http://localhost:1337/users/me', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${Token}`,
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          console.log(response)
          dispatch(FetchCurrentUserFailed(response.message));
        } else {
          console.log(response)
          dispatch(FetchCurrentUserSuccess(response));
          history.push("/profile")
        }
      })
  }
}
  const UserName = useSelector(state => state);
  console.log(UserName)
  return (
    <div>
      <label for="email">username: {username}</label>
      <input onChange={SaveUserName}/>
    
      <label for="description">description: {description}</label>
      <input onChange={SaveUserDescription}/>
      <button onClick={()=>{dispatch(UpdateUserProfile())}} >modify</button>
    </div>
  );
}

export default UserEditable;
