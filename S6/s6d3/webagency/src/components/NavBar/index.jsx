import Btn from './btn';
import {Link} from 'react-router-dom'
import withDarkMode from '../../context/DarkModeContext/WithDarkMode';

const NavBar = ({darkModeData}) => {
  //const SwitchMode = useContext(DarkModeContext)

return(
  <div>
    <Link to= "/">Home</Link>
    <Link to= "/about">About</Link>
    <Link to= "/works">Works</Link>
    <Btn/>
  </div>
  
)
}

export default withDarkMode(NavBar);