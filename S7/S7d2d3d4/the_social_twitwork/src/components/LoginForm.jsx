import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess, RegisterCurrentEmail,RegisterCurrentUserName,RegisterCurrentPassword } from '../Redux';

const LoginForm = () => {
  const email = useSelector(state => state.currentuser.email)
  const username = useSelector(state => state.currentuser.username)
  const password = useSelector(state => state.currentuser.password)
  
  const dispatch = useDispatch();
  const data = {
    'identifier':email,
    'password':password
  }
  
  const saveEmail=(e) => {
    dispatch(RegisterCurrentEmail( e.target.value))
  }
  const saveUserName=(e) => {
    dispatch(RegisterCurrentUserName( e.target.value))
  }
  const savePassword=(e) => {
    dispatch(RegisterCurrentPassword(e.target.value))
  }
  
  const FetchToLogin =()=> {
    return ()=>{
    //dispatch(FetchCurrentUserRequest());
    fetch('http://localhost:1337/auth/local', {
        method: 'POST',
        headers: {
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
          dispatch(FetchCurrentUserSuccess(response.user))
          Cookies.set('token',response.jwt)
        }
      })
    }
  }
  
  return (
    <div>
      <label for="email" >email : </label>
      <input type="text" onChange={saveEmail}/>
      <label for="password" >password : </label>
      <input type="password" onChange={savePassword}/>
      <button onClick={()=>{dispatch(FetchToLogin())}}>login</button>
    </div>
  );
}

export default LoginForm;
