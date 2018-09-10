const initialWombatState = {
    wombats: ['Gertrude', 'Bartholemew']
  }
  
const initialslothState = {
    sloths: ['Jeff', 'Steve']
}

export const wombatReducer = (state = initialWombatState, action) => {
    switch (action.type) {
      case 'ADD_WOMBAT':
        return {
          
          wombats: [...state.wombats, action.animal]
        }
      case 'DEL_WOMBAT':
        return {
          wombats: state.wombats.filter((wombat) => wombat !== action.animal)
        }
      case 'UPDATE_WOMBAT':
        return {
          wombats: state.wombats.map((animal) => {  
            if (animal == action.animal){
            return animal = action.newAnimal
          }
          else
            return animal
        })
        }
      default:
        return state
    }
  }
  
export const slothReducer = (state = initialslothState, action) => {
    switch (action.type) {
        case 'ADD_SLOTH':
        return {
            sloths: [...state.sloths, action.animal]
        }
    case 'DEL_SLOTH':
        return {
            sloths: state.sloths.filter((sloth) => sloth !== action.animal)
        }
    case 'UPDATE_SLOTH':
        return {
            sloths: state.sloths.map((sloth) => { if (sloth == action.animal){
            return sloth = action.newAnimal
            }
            else
        return sloth
        })
        }
    default:
        return state
    }
}

