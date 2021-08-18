import React from 'react';
import  Home from './pages/Home'
import  Login from './pages/Login'
import  Signup from './pages/Signup'
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import User from './pages/User';
import {
  BrowserRouter as Router,
  Route, 
  Switch, 
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store';



const App = () => {
  return (
    <div>
    <Provider store={store}>
      <Router>
        <NavBar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/user/:UserName">
              <User/>
            </Route>
          </Switch>
        </main>
      </Router>
      </Provider>
    
    </div>
  );
}

export default App;
