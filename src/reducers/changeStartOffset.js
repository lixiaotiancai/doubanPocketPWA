import {
  CHANGE_BOOK_OFFSET,
  CHANGE_MOVIE_OFFSET,
  CHANGE_MUSIC_OFFSET
} from '../actions'

let initialState = {
  book: 0,
  movie: 0,
  music: 0
}

const changeStartOffset = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOOK_OFFSET:
      return { ...state,
        book: action.bookOffset
      }
    case CHANGE_MOVIE_OFFSET:
      return { ...state,
        movie: action.movieOffset
      }
    case CHANGE_MUSIC_OFFSET:
      return { ...state,
        music: action.musicOffset
      }
    default:
      return state
  }
}

export default changeStartOffset
