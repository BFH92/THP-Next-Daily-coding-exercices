import React from 'react'

const Filter = (props) =>{
  //console.log(props.params)
  const [enableFav,setFilter] = React.useState(props.params)
  
  const favoritesFilter = () =>{
    setFilter(!enableFav)
    console.log(enableFav)
    
  }
  
  return(
    <div>
      <button onClick={favoritesFilter}>Favorites filter</button>
    </div>
  )
}

export default Filter