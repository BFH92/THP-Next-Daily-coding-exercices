import { createStore} from 'redux';
import { combineReducers } from 'redux';
import MessagesListReducer from './Reducers/MessagesListReducer';
import CurrentUserReducer from './Reducers/CurrentUserReducer';
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  message: MessagesListReducer ,
  currentuser: CurrentUserReducer,
})

 
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)




  export let store = createStore(persistedReducer,compose(applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  
  export let persistor = persistStore(store)
