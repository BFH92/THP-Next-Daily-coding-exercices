import React from 'react';
import ReactDOM from 'react-dom';
import Paragraphs from './components/Paragraphs';
import TotalAmount from './components/TotalAmount'
const App = () => (
  <div>
    <h1>Hello world!</h1>
    <p>How are you?</p>
    <Paragraphs />
    <ul>
      <li>Books: <TotalAmount amount={154} /></li>
      <li>Pencils: <TotalAmount amount={12.85} /></li>
      <li>Erasers: <TotalAmount amount={18} /></li>
    </ul>
  </div>
)



ReactDOM.render(<App />, document.getElementById('root'));