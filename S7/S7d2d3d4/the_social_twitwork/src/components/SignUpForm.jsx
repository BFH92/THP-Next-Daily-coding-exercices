import React from 'react';
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux';
import {FetchCurrentUserFailed, FetchCurrentUserRequest, FetchCurrentUserSuccess, RegisterCurrentEmail,RegisterCurrentUserName,RegisterCurrentPassword } from '../Redux';


  
const SignUpForm = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.currentuser.email)
  const username = useSelector(state => state.currentuser.username)
  const password = useSelector(state => state.currentuser.password)
    const data = {
      'username':username,
      'email': email,
      'password':password
    }
    const saveEmail=(e) => {
      dispatch(RegisterCurrentEmail( e.target.value))
    }
    const saveUserName=(e) => {
      dispatch(RegisterCurrentUserName( e.target.value))
    }
    const savePassword=(e) => {
      dispatch(RegisterCurrentPassword( e.target.value))
    }
    const FetchSignUp =()=> {
      return (dispatch)=>{
      dispatch(FetchCurrentUserRequest());
      fetch('http://localhost:1337/auth/local/register', {
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
            console.log(response.status)
            dispatch(FetchCurrentUserSuccess(response.user))
            Cookies.set('token',response.jwt)
          }
        })
      }
    }
  return (
    <div>
      <label for="username">username : </label>
      <input type="text" onChange={saveUserName}/>
      <label for="email">email : </label>
      <input type="text" onChange={saveEmail}/>
      <label for="password">password : </label>
      <input type="password" onChange={savePassword}/>
      <button onClick={()=>{dispatch(FetchSignUp())}}>SignUp</button>
    </div>
  );
}

export default SignUpForm;
