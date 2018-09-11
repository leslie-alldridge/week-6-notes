import {combineReducers} from 'redux'
import navReducer from './reduce_nav'
import addCart from './cart_reducer'

// import otherReducer from './other-reducer'

export default combineReducers({
  navReducer: navReducer,
  addCart: addCart,
})
