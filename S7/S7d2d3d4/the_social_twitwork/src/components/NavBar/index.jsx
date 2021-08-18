import React from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../MessagesList/LikeButton';
import { useSelector, useDispatch } from 'react-redux';
import { SaveCurrentToken } from '../../Redux';
import Cookies from 'js-cookie'

const NavBar = () => {
  
const login = useSelector(state => state.currentuser.logged)
const dispatch = useDispatch()
const logOut =() =>{
  Cookies.remove('token')
  Cookies.remove('id')
  dispatch(SaveCurrentToken())
}
  return (
    <div>
      <div>
        <Link to="/">Home</Link> 
      </div>  
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        {login?<button onClick={logOut}>Logout</button> : <Link to="/login">LOGIN</Link>} 
      </div>
      <div>
        {login?"" : <Link to="/register">SIGNUP</Link>} 
      </div>
    </div>
  );
}

export default NavBar;
