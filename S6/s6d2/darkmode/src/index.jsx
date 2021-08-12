import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DarkModeContext from './context/DarkModeContext'
import './index.css'
const App = () => {

  const[textColor, setTextColor] = useState("")
  const[backGroundColor, setBackGroundcolor] = useState("");
  const[btn, setbtn] = useState("");
  const[btnName, setbtnName] = useState("Dark Mode");
  const mystyle = {
    backgroundColor: backGroundColor,
  };
  return(
    <div className="container-all" style={mystyle}>
  
    <DarkModeContext.Provider value={{
      color:textColor,
      backgroundColor:backGroundColor,
      btn:btn,
      btnName:btnName,
      ToDarkMode: () => {setTextColor("white"); setBackGroundcolor("black");setbtn("darkModeBtn");setbtnName("Light Mode");},
      ToLightMode: () => {setTextColor("black"); setBackGroundcolor("white");setbtn("lightModeBtn");setbtnName("Dark Mode");}
      }}>
    <Header/>
    <Resume/>
    <Projects/>
    <Contact />
    </DarkModeContext.Provider>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))