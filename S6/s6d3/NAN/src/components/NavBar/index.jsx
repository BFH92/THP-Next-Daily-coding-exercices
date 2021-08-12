import React from 'react'
import Btn from './btn';
import {Link} from 'react-router-dom'

const NavBar = () => {
return(
  <div>
    <Link to= "/">Home</Link>
    <Link to= "/about">About</Link>
    <Link to= "/works">Works</Link>
    <Btn/>
  </div>
  
)
}

export default NavBar;