import React from 'react'
import ReactDOM from 'react-dom'
import SetColor from './components/setColor'
import SearchBar from './components/searchBar'
import RandomMeal from './components/randomMeal'
import HangMan from './components/hangman'
const App=() => (

  <div>
    <h1> Hello ! </h1>
    <div><SetColor/></div>
    <div><SearchBar/></div>
    <div><RandomMeal/></div>


    <div>PENDU</div>
    <div><HangMan/></div>
  
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));