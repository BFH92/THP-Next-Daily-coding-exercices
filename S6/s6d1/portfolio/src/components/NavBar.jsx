import React from 'react'
import {Link} from 'react-router-dom'
import books from '../data/books'
const NavBar = () => {
  return(
    <>
    {books.map((book,index)=>
      <Link key={index} to= {`/book/${book.slug}`}>{book.title} </Link>
    )}
    </>
  )
}

export default NavBar;