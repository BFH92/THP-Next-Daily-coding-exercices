import React from 'react'
import {useParams} from 'react-router'
import books from '../data/books';


const Book = () => {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = React.useState(undefined)

  React.useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  
  
  return(
    <div>
      <h2>{currentBook? currentBook.title : "hey"}</h2>
      <p>{currentBook? currentBook.author : "hey"}</p>
      <p>{currentBook? currentBook.description : "hey"}</p>
      
    
    </div>
  )
}

export default Book;