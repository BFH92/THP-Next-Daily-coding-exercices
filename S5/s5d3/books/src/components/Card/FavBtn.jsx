import React from 'react'
import Card from '../Card'
const FavBtn = (props) => {

  const [Fav, setFav] = React.useState(props.params);
  
  const chgValue = () => {
    setFav(!Fav)
  console.log(Fav)
  props.Books[props.index]= Fav
  }
  
  
  return(
    <div>
      <button onClick={chgValue} className={Fav ? "button__active" : null}>Add to Favorites</button>  
    </div>  
  )

}



export default FavBtn