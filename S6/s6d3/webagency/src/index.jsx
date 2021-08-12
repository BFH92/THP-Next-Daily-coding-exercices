import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import { Home } from './pages/Home'
import Works from './pages/Works'
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'
import './app.css'
import DarkModeContext from './context/DarkModeContext'

const App = () => {
  let modeSettled = localStorage.getItem('darkMode')
  const [darkMode, setDarkMode] = useState(modeSettled)
  
  return(
    <div className={darkMode === "enabled"? "container-all darkMode":"container-all"}>
    <DarkModeContext.Provider value ={{
      darkMode:darkMode,
      ToDarkMode: () => {setDarkMode("enabled");  localStorage.setItem('darkMode',"enabled");},
      ToLightMode: () => {setDarkMode("disabled"); localStorage.setItem('darkMode',"disabled");},
    }}>
    
    <Router>
      <NavBar />
      <main className="Container">
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
    </DarkModeContext.Provider>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))