import React from 'react'
import MixedContent from './mixedContent'
import blueImage from '../images/blue.png'
import redImage from '../images/red.png'
import greenImage from '../images/green.png'
import yellowImage from '../images/yellow.png'

  const SetColor = () => {
    const [color, setColor] = React.useState("red");

    const changeColor = (newColor) => {
      setColor(newColor);
      //console.log(color)
    }


  return(
    <div>
  < MixedContent text={"blue"} image={blueImage} onClick={function(){changeColor("blue")}}/>
  < MixedContent text={"green"} image={greenImage} onClick={function(){changeColor("green")}}/>
  < MixedContent text={"red"} image={redImage} onClick={function(){changeColor("red")}}/>
  < MixedContent text={"yellow"} image={yellowImage} onClick={function(){changeColor("yellow")}}/>

  <p> the last color is {color}</p>
  </div>

  )
}
export default SetColor;