import {
  CHANGE_BOOK_LOADMORE_SWITCH,
  CHANGE_MOVIE_LOADMORE_SWITCH,
  CHANGE_MUSIC_LOADMORE_SWITCH
} from '../actions'

let initialState = {
  book: true,
  movie: true,
  music: true
}

const changeLoadMoreSwitch = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOOK_LOADMORE_SWITCH:
      return { ...state,
        book: !state.book
      }
    case CHANGE_MOVIE_LOADMORE_SWITCH:
      return { ...state,
        movie: !state.movie
      }
    case CHANGE_MUSIC_LOADMORE_SWITCH:
      return { ...state,
        music: !state.music
      }
    default:
      return state
  }
}

export default changeLoadMoreSwitch
