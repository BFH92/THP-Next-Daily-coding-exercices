import React from 'react'
import  ReactDOM  from 'react-dom'
import Cards from './components/Cards'
import './style.css'
import datas from './books.json'
import SearchBar from './components/SearchBar'
const App = () =>{
  const Books = datas.books[0]
  


return(
  <div>
  <div>
      < SearchBar list={Books} />
      </div>

  
  </div>
)

}

ReactDOM.render(<App />, document.getElementById('root'));