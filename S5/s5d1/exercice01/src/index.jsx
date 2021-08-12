import React from 'react'
import ReactDOM from 'react-dom'
import MixedContent from './components/MixedContent';
import blueImage from './assets/images/blue.png'
import redImage from './assets/images/red.png'
import greenImage from './assets/images/green.png'
import pinkImage from './assets/images/pink.png'
import yellowImage from './assets/images/yellow.png'
const App = () => (

  <div>
    < MixedContent  title ={"title1"} text={"text1"} image={blueImage}/>
    < MixedContent  title ={"title2"} text={"text2"} image={greenImage}/>
    < MixedContent  title ={"title3"} text={"text3"} image={redImage}/>
    < MixedContent  title ={"title4"} text={"text4"} image={yellowImage}/>
    < MixedContent  title ={"title5"} text={"text5"} image={pinkImage}/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));