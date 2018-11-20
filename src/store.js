import { createStore, combineReducers } from 'redux'
import clientReducer from './reducers/client';

const rootReducer = combineReducers({ //takes all of the reducers functiion and acts as a master reducer
  client: clientReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store