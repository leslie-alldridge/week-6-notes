import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook

});

export default rootReducer;

//this is pretty much our starting state - a key books with the outcome of reducer books
