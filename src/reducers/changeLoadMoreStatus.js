import config from '../config'

import {
  CHANGE_BOOK_LOADMORE_STATUS,
  CHANGE_MOVIE_LOADMORE_STATUS,
  CHANGE_MUSIC_LOADMORE_STATUS
} from '../actions'

let initialState = {
  book: config.loadmore.status.prepare,
  movie: config.loadmore.status.prepare,
  music: config.loadmore.status.prepare
}

const changeLoadMoreStatus = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOOK_LOADMORE_STATUS:
      return { ...state,
        book: action.bookLoadMoreStatus
      }
    case CHANGE_MOVIE_LOADMORE_STATUS:
      return { ...state,
        movie: action.movieLoadMoreStatus
      }
    case CHANGE_MUSIC_LOADMORE_STATUS:
      return { ...state,
        music: action.musicLoadMoreStatus
      }
    default:
      return state
  }
}

export default changeLoadMoreStatus
