//function that returns an action
//then it goes to reducers and they return a new updated state

export function selectBook(book) {
    //action creator needs to return an action, an object with a type property.
 return {
    type: 'BOOK_SELECTED',
    payload: book,
 }; 
}