import React from 'react'
import FavBtn from './FavBtn'
import ReadBtn from './ReadBtn'
const Card = (props) => {
const [Fav, setFav] = React.useState(props.params);
const {title, shortDescription, isFav, read, thumbnailUrl} = props.data







  return (
    <div className ="card">
    <h3>{title}</h3>
    { shortDescription? <p>{shortDescription}</p>:<p>Pas de description disponible</p>}
    <img src={thumbnailUrl} alt={title}></img>
    <div><FavBtn params={isFav} filter={props.params} list={props.list} index={props.key}/></div>
    
    <div><ReadBtn params={read}/></div>
    </div>
  )
}

export default Card