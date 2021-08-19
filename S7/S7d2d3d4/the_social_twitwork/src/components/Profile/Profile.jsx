import React from 'react';
import Cookies from 'js-cookie'
import { useSelector, } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess,RegisterCurrentUserName, RegisterCurrentDescription } from '../../Redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UpdateUserProfile } from '../helpers/fetch';
const UserEditable = () => {
  const history = useHistory()
  const Token = Cookies.get('token')
  const dispatch = useDispatch();
  const email = useSelector(state => state.currentuser.email)
  const username = useSelector(state => state.currentuser.username)
  const description = useSelector(state => state.currentuser.description)
  const currentLike = useSelector(state => state.currentuser.currentLike)
  const [UserNameInput, setUsernameInput] =  useState(username);
  const [DescriptionInput, setDescriptionInput] =  useState(description);


  const data = {
    username: UserNameInput,
    description: DescriptionInput,
  };
  const UpdateUserProfile = () => {
    
    return (dispatch) => {
      dispatch(RegisterCurrentUserName(UserNameInput));
      dispatch(RegisterCurrentDescription(DescriptionInput));
      dispatch(FetchCurrentUserRequest());
  
      fetch("http://localhost:1337/users/me", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log(response);
            UpdateUserProfile()
          //  dispatch(FetchCurrentUserFailed(response.message));
          } else {
            console.log(response);
            dispatch(FetchCurrentUserSuccess(response));
            history.push("/profile");
          }
        });
    };
  };
  console.log(currentLike)

  const SaveUserName=(e) => {
    setUsernameInput(e.target.value)
  }
  const SaveUserDescription=(e) => {
    setDescriptionInput(e.target.value)
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
      <p>{email}</p>
    </div>
  );
}

export default UserEditable;
