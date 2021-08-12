import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Documentation from './pages/Documentation'
import NavBar from './components/NavBar'
import Book from './components/Book'


const App = () => {

  return(
    <div>
      <Router>
        <NavBar />
        <main>
          <Switch>
          <Route path="/book/:bookSlug">
            <Book />
          </Route>
        </Switch>
        </main>
      </Router>
      
  
  

    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));