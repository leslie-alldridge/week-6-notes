export default function(state = '', action){
    switch(action.type){
        case "ADD_TO_CART":
        return [...state, 
            action
          ]
         
          case "DELETE_FROM_CART":

          return state.filter(item => item.id !== action.id)

          case "UPDATE_CART":
          const index = state.findIndexA(item => item.id === action.id)
          if (index > -1) {
            return state.map(item => {
                if (item.id === action.id) return action;
                return item;
            })
          }
         return [
            ...state, action
         ]
    }
    return state
}


// export default function(state = [], action){
//     console.log(action)
//     switch(action.type){
//         case "DELETE_FROM_CART":

//         return state.filter(item => item.id !== action.id)
//     }
//     return state
// }



//state.slice(0, action.id).concat(state.slice(action.id +1));