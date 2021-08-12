import React from 'react'

const SearchBar =() => {
 
  const [value, setValue] = React.useState("");
  
  const lowerCasing = ({target}) => {
    setValue(target.value.toLowerCase())
  }
  return (
    <input id="searchbar" value={value} onChange={lowerCasing} type="text" name="search" placeholder="Rechercher..."></input>
  )
}
export default SearchBar;