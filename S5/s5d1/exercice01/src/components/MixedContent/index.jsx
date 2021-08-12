import React from 'react'
//import blueImage from './blue.png'
//import redImage from './red.png'
//import greenImage from './green.png'
//import pinkImage from './pink.png'
//import yellowImage from './yellow.png'

const MixedContent = (props) => (

  <span className="MixedContent">
    <h1>Title: {props.title} </h1>
    <p>Text: {props.text}</p>
    <p>Image:</p> <img src={props.image}></img>
  </span>


)

export default MixedContent;