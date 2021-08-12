import React, {useContext} from 'react'
import github from '../../assets/img/github.png'
import DarkModeContext from '../../context/DarkModeContext';
import withDarkMode from '../../context/withDarkMode'

const Header = ({darkModeData}) => {
const SwitchMode = useContext(DarkModeContext); 
const mystyle = {
  color: darkModeData.color,
  backgroundColor: darkModeData.backgroundColor,
};


return(
  <div style={mystyle}>
  <h3>Portfolio de John Doe</h3> 
  <a href="https://www.github.com"><img src={github} alt=" github Logo" /></a>

  {darkModeData.btnName === "Dark Mode" ? <button className={darkModeData.btn} onClick={SwitchMode.ToDarkMode}>{darkModeData.btnName}</button> : <button className={darkModeData.btn} onClick={SwitchMode.ToLightMode}>{darkModeData.btnName}</button>}
  </div>
  
  
)};
export default withDarkMode(Header);
