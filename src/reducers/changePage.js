import {
  getCurrentPageId,
  getPlaceholder
} from '../assets/util'

import {
  CHANGE_PAGE
} from '../actions'

let initialState = {
  pageId: getCurrentPageId(),
  placeholder: getPlaceholder(getCurrentPageId())
}

const changePage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state,
        pageId: action.pageId,
        placeholder: getPlaceholder(action.pageId)
      }
    default:
      return state
  }
}

export default changePage
