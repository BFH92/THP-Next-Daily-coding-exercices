import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './app'
import { createStore} from 'redux';
import { combineReducers } from 'redux';
import pastasReducer from './redux/pastas/pastasReducer';
import riceReducer from './redux/rices/ricesReducer';

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer
})

let store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById("root"))
