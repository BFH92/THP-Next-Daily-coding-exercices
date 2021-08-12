import React from 'react'
import Card from '../Card'

const SearchBar = (props) => {
const Books = props.list
const [searchTerm, setSearchTerm] = React.useState("");
const [searchResults, setSearchResults] = React.useState([]);
const [BookList,setBooks ]= React.useState(Books)
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = Books.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm,Books]);

  const [enableFav,setFilter] = React.useState(props.params);
  
  const favoritesFilter = () =>{
    setFilter(!enableFav)
  }

  React.useEffect(() => {
    const results = Books.filter(book =>
      book.isFav === enableFav
    );
    setSearchResults(results)
  }, [Books,enableFav])

  return (
    <> 
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div>
        <button onClick={favoritesFilter}>Favorites filter</button>
      </div>
    
      <div className ="cards">
        {searchResults.map((book, index) =>
          <Card data={book} params={props.params} key={index} list ={searchResults}/>
        )}
      </div>
    </div>
    </>
  );
  }
  export default SearchBar