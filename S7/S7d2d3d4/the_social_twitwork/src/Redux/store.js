import { createStore} from 'redux';
import { combineReducers } from 'redux';
import MessagesListReducer from './Reducers/MessagesListReducer';
import CurrentUserReducer from './Reducers/CurrentUserReducer';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
const rootReducer = combineReducers({
  message: MessagesListReducer ,
  currentuser: CurrentUserReducer,
})

let store = createStore(rootReducer,
compose(applyMiddleware(thunkMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store;