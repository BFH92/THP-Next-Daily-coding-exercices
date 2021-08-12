import React from 'react'
import './works.css';
import CaseStudy from './CaseStudy';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'
import './works.css'
const Works = () => {

  return(
  
    <div>
      <h2>Au fil des années, nous avons pu accompagner les meilleurs.</h2>
      <p> Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <Router>
        <NavBar />
        
        <main className="useCase">
          <Switch>  
            <Route path="/works" exact>
              
            </Route>
          
            <Route path="/works/:caseSlug">
              <CaseStudy />
            </Route>
          
          </Switch>
        </main>
      
      </Router>
      
    
    </div>

    
  )
}

export default Works;
