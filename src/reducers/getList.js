import {
  GET_BOOK_LIST,
  GET_MOVIE_LIST,
  GET_MUSIC_LIST
} from '../actions'

let initialState = {
  book: undefined, // 这里设成 undefined 而不是 [], 是为了区分 加载状态 和 无查询结果状态
  movie: undefined,
  music: undefined
}

const getList = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_LIST:
      return { ...state,
        book: action.bookList
      }
    case GET_MOVIE_LIST:
      return { ...state,
        movie: action.movieList
      }
    case GET_MUSIC_LIST:
      return { ...state,
        music: action.musicList
      }
    default:
      return state
  }
}

export default getList
