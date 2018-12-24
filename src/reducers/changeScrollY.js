import {
  CHANGE_START_Y,
  CHANGE_MOVE_Y
} from '../actions'

let initialState = {
  startY: 0,
  moveY: 0
}

const changeScrollY = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_START_Y:
      return { ...state,
        startY: action.startY
      }
    case CHANGE_MOVE_Y:
      return { ...state,
        moveY: action.moveY
      }
    default:
      return state
  }
}

export default changeScrollY
