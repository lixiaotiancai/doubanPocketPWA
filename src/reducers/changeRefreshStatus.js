import config from '../config'

import {
  CHANGE_BOOK_REFRESH_STATUS,
  CHANGE_MOVIE_REFRESH_STATUS,
  CHANGE_MUSIC_REFRESH_STATUS
} from '../actions'

let initialState = {
  book: config.refresh.status.prepare,
  movie: config.refresh.status.prepare,
  music: config.refresh.status.prepare
}

const changeRefreshStatus = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BOOK_REFRESH_STATUS:
      return { ...state,
        book: action.bookRefreshStatus
      }
    case CHANGE_MOVIE_REFRESH_STATUS:
      return { ...state,
        movie: action.movieRefreshStatus
      }
    case CHANGE_MUSIC_REFRESH_STATUS:
      return { ...state,
        music: action.musicRefreshStatus
      }
    default:
      return state
  }
}

export default changeRefreshStatus
