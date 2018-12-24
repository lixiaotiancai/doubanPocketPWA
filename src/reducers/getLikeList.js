import {
  GET_LIKE_LIST
} from '../actions'

let initialState = {
  likeList: []
}
const getLikeList = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKE_LIST:
      return { ...state,
        likeList: action.likeList
      }
    default:
      return state
  }
}

export default getLikeList
