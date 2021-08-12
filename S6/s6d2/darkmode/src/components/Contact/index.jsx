import React from 'react'
import withDarkMode from '../../context/withDarkMode'

const Contact = ({darkModeData}) => {
  const mystyle = {
    color: darkModeData.color,
    backgroundColor: darkModeData.backgroundColor,
  };
  return(
    <div style={mystyle}>
    <p>
      Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? 
      Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.
    </p>
    
    <form action="submit">
    <input type="submit" value="me contacter"></input>
      
    </form>
    </div>
  )
}

export default withDarkMode(Contact);