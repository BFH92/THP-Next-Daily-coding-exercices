import React from 'react'
import jungler from '../../assets/img/jungler.png'
import secha from '../../assets/img/secha.png'
import withDarkMode from '../../context/withDarkMode'


const Projects = ({darkModeData}) => {
  const mystyle = {
    color: darkModeData.color,
    backgroundColor: darkModeData.backgroundColor,
  };
  return(
    <div style={mystyle}>
    <p >
      Vous pourrez trouver ci-dessous la liste de mes projets. 
      J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.
    </p>
    <div>
      <a href="https://www.github.com"><img src={jungler} alt="jungler app" /></a>
      <p>Le site Jungler, pour permettre aux joueurs de LOL de se rencontrer</p>
    </div>
    
    <div>  
      <a href="https://www.github.com"><img src={secha} alt="secha site" /></a>
      <p>Le site d'Alain Secha, artiste contemporain</p>
    </div>
  
    </div>
  )
}

export default withDarkMode(Projects);