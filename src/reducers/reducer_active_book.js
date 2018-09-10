export default function (state = null, action) {
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload
    }
    return state 
}

//reducers are only ever called when an action occurs. 

//the state is not application state, only the state that this reducer is responsible for.

//reducers aren't allowed to mutate things, must return a fresh object.