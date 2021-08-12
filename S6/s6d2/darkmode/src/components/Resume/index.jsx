import React from 'react'
import withDarkMode from '../../context/withDarkMode'
//import DarkModeContext from '../../context/DarkModeContext';
const Resume = ({darkModeData}) => {
  //const darkModeData = React.useContext(DarkModeContext);
  const mystyle = {
    color: darkModeData.color,
    backgroundColor: darkModeData.backgroundColor,
  };
  return(
    <div style={mystyle}>

    <h1>Bonjour, je m'appelle John Doe. Bienvenue sur mon portfolio !</h1>
    <p>
      Depuis quelques mois, j'apprends le développement web grâce à The Hacking Project.
      J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.
    </p>

    </div>
  )
}

export default withDarkMode(Resume);