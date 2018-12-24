import {
  GET_BOOK_DETAIL,
  GET_MOVIE_DETAIL,
  GET_MUSIC_DETAIL
} from '../actions'

let initialState = {
  book: {},
  movie: {},
  music: {}
}

const getDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL:
      return { ...state,
        book: action.bookDetail
      }
    case GET_MOVIE_DETAIL:
      return { ...state,
        movie: action.movieDetail
      }
    case GET_MUSIC_DETAIL:
      return { ...state,
        music: action.musicDetail
      }
    default:
      return state
  }
}

export default getDetail
