import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import cartReducer from '../reducers/cartReducer'
import wishlistReducer from '../reducers/wishlistReducer'
import offersReducer from '../reducers/offersReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  offers: offersReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
