import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SaveCurrentToken } from '../../Redux';
import Cookies from 'js-cookie'
import './index.css'
const NavBar = () => {
  
const login = useSelector(state => state.currentuser.logged)
const dispatch = useDispatch()
const logOut =() =>{
  Cookies.remove('token')
  Cookies.remove('id')
  dispatch(SaveCurrentToken())
}
  return (
    <div className="navBar">
      <div>
        <Link to="/">Home</Link> 
      </div>  
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        {login?<button onClick={logOut}>Logout</button> : <div><Link to="/login">LOGIN</Link> / <Link to="/register">SIGNUP</Link></div> } 
      </div>
      
    </div>
  );
}

export default NavBar;
