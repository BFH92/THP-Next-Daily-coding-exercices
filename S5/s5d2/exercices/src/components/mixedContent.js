import React from 'react'



const MixedContent = (props) => (

  <span className="MixedContent">
    <p>Image:</p> <img src={props.image} alt={props.text} onClick={props.onClick}></img>
  </span>


)

export default MixedContent;