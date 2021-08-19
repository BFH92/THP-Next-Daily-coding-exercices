import React from 'react';
import  Home from './pages/Home'
import  Login from './pages/Login'
import  Signup from './pages/Signup'
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import User from './pages/User';
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { Provider } from 'react-redux';
import {store,persistor} from './Redux/store';
import { useSelector } from 'react-redux';

const App = () => {
  
  
  
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const login = useSelector(state => state.currentuser.logged)
    return(
    <Route {...rest} render={props => (
      login? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  )};



  return (
    <div className="containerAll">
      
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
            <Route path="/register">
              <Signup />
            </Route>
            <PrivateRoute path="/profile" component={Profile}/>
            
            <PrivateRoute path="/users/:UserName"component={User}/>
            
          </Switch>
        </main>
      </Router>
      </PersistGate>
      </Provider>
    
    
    </div>
  );
}

export default App;
