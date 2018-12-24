import {
  CHANGE_SEARCH_TEXT
} from '../actions'

let initialState = {
  searchText: ''
}

const changeSearchText = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return { ...state,
        searchText: action.searchText
      }
    default:
      return state
  }
}

export default changeSearchText
