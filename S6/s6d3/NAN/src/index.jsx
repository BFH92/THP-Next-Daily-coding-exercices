import React from 'react'
import { ReactDOM } from 'react'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'

import './app.scss'

const App = () => {

  return(
    <>
  <p>test</p>
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </main>
    </Router>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))