import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

const rootReducer = combineReducers({
    books: BooksReducer  
});

export default rootReducer;

//this is pretty much our starting state - a key books with the outcome of reducer books
