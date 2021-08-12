import React from 'react'
import Card from '../Card'




const Cards = (props) => {
  const Books = props.list
  const [BookList,setBooks ]= React.useState(Books)
  

  console.log(Books)
  const [enableFav,setFilter] = React.useState(props.params);
  
    const favoritesFilter = () =>{
      setFilter(!enableFav)
    }

    React.useEffect(() => {
      const results = Books.filter(book =>
        book.isFav === enableFav
      );
      setBooks(results)
    }, [Books,enableFav])
  
    
  return (
    <div>
      
      <div>
        <button onClick={favoritesFilter}>Favorites filter</button>
      </div>
    
      <div className ="cards">

      {BookList.map((book, index) =>
        <Card data={book} params={props.params} key={index}/>
        )}
      </div>
    </div>


  )
}//faire un petit composant de mapping

export default Cards;