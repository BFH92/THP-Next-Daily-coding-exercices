import { createStore} from 'redux';
import { combineReducers } from 'redux';
import pastasReducer from "./pastas/pastasReducer";
import riceReducer from './rices/ricesReducer';

const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer,
})

let store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;