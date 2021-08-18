import React from 'react';
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess } from '../Redux';
import { useDispatch } from 'react-redux';


const UserEditable = () => {
  // if userName
  const Token = Cookies.get('token')
  const UserEmail = "User mail example"
  const dispatch = useDispatch();

  const fetchUserProfile = () => { //TODO: A FAIRE EN PRIO
    return (dispatch) => {
      dispatch(FetchCurrentUserRequest());

      fetch('http://localhost:1337/users/me', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${Token}`,
          'Content-Type':'application/json'
        }
        //body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.error) {
            console.log(response)
            dispatch(FetchCurrentUserFailed(response.message));
          } else {
            console.log(response)
            dispatch(FetchCurrentUserSuccess(response.user));
          }
        })
    }
  }
  //dispatch(fetchUserProfile())
  const UserName = useSelector(state => state);
  console.log(UserName)
  return (
    <div>
      <label for="email">username: </label>
      <input ></input>
      <label for="email">email: </label>
      <input ></input>
      <button onClick={()=>{dispatch(fetchUserProfile())}} >modify</button>
    </div>
  );
}

export default UserEditable;
