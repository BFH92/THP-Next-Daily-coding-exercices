import React from 'react'
import  ReactDOM  from 'react-dom'
import Clients from './components/Clients';
import './style.css'

const App = () => (

  <div>
  <h1>Hello World</h1>
  <div><Clients/></div>
  </div>


)


ReactDOM.render(<App />, document.getElementById('root'));