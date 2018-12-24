import {
  GET_BOOK_SCROLL_Y,
  GET_MOVIE_SCROLL_Y,
  GET_MUSIC_SCROLL_Y
} from '../actions'

let initialState = {
  book: 0,
  movie: 0,
  music: 0
}

const getScrollY = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_SCROLL_Y:
      return { ...state,
        book: action.bookScrollY
      }
    case GET_MOVIE_SCROLL_Y:
      return { ...state,
        movie: action.movieScrollY
      }
    case GET_MUSIC_SCROLL_Y:
      return { ...state,
        music: action.musicScrollY
      }
    default:
      return state
  }
}

export default getScrollY
