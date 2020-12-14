import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import shopsReducer from '../reducers/shops';
import booksReducer from '../reducers/books';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    shops: shopsReducer,
    books: booksReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;