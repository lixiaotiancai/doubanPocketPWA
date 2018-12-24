export const CHANGE_PAGE = 'CHANGE_PAGE'

export const GET_BOOK_LIST = 'GET_BOOK_LIST'
export const GET_MOVIE_LIST = 'GET_MOVIE_LIST'
export const GET_MUSIC_LIST = 'GET_MUSIC_LIST'

export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT'

export const GET_BOOK_DETAIL = 'GET_BOOK_DETAIL'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const GET_MUSIC_DETAIL = 'GET_MUSIC_DETAIL'

export const CHANGE_START_Y = 'CHANGE_START_Y'
export const CHANGE_MOVE_Y = 'CHANGE_MOVE_Y'

export const CHANGE_BOOK_REFRESH_STATUS = 'CHANGE_BOOK_REFRESH_STATUS'
export const CHANGE_MOVIE_REFRESH_STATUS = 'CHANGE_MOVIE_REFRESH_STATUS'
export const CHANGE_MUSIC_REFRESH_STATUS = 'CHANGE_MUSIC_REFRESH_STATUS'

export const CHANGE_BOOK_LOADMORE_STATUS = 'CHANGE_BOOK_LOADMORE_STATUS'
export const CHANGE_MOVIE_LOADMORE_STATUS = 'CHANGE_MOVIE_LOADMORE_STATUS'
export const CHANGE_MUSIC_LOADMORE_STATUS = 'CHANGE_MUSIC_LOADMORE_STATUS'

export const CHANGE_BOOK_LOADMORE_SWITCH = 'CHANGE_BOOK_LOADMORE_SWITCH'
export const CHANGE_MOVIE_LOADMORE_SWITCH = 'CHANGE_MOVIE_LOADMORE_SWITCH'
export const CHANGE_MUSIC_LOADMORE_SWITCH = 'CHANGE_MUSIC_LOADMORE_SWITCH'

export const CHANGE_BOOK_OFFSET = 'CHANGE_BOOK_OFFSET'
export const CHANGE_MOVIE_OFFSET = 'CHANGE_MOVIE_OFFSET'
export const CHANGE_MUSIC_OFFSET = 'CHANGE_MUSIC_OFFSET'

export const GET_BOOK_SCROLL_Y = 'GET_BOOK_SCROLL_Y'
export const GET_MOVIE_SCROLL_Y = 'GET_MOVIE_SCROLL_Y'
export const GET_MUSIC_SCROLL_Y = 'GET_MUSIC_SCROLL_Y'

export const GET_LIKE_LIST = 'GET_LIKE_LIST'

export const changePage = (pageId) => {
  return {
    type: CHANGE_PAGE,
    pageId
  }
}

export const getBookList = (bookList) => {
  return {
    type: GET_BOOK_LIST,
    bookList
  }
}

export const getMovieList = (movieList) => {
  return {
    type: GET_MOVIE_LIST,
    movieList
  }
}

export const getMusicList = (musicList) => {
  return {
    type: GET_MUSIC_LIST,
    musicList
  }
}

export const changeSearchText = (searchText) => {
  return {
    type: CHANGE_SEARCH_TEXT,
    searchText
  }
}

export const getBookDetail = (bookDetail) => {
  return {
    type: GET_BOOK_DETAIL,
    bookDetail
  }
}

export const getMovieDetail = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL,
    movieDetail
  }
}

export const getMusicDetail = (musicDetail) => {
  return {
    type: GET_MUSIC_DETAIL,
    musicDetail
  }
}

export const changeStartY = (startY) => {
  return {
    type: CHANGE_START_Y,
    startY
  }
}

export const changeMoveY = (moveY) => {
  return {
    type: CHANGE_MOVE_Y,
    moveY
  }
}

export const changeBookRefreshStatus = (bookRefreshStatus) => {
  return {
    type: CHANGE_BOOK_REFRESH_STATUS,
    bookRefreshStatus
  }
}

export const changeMovieRefreshStatus = (movieRefreshStatus) => {
  return {
    type: CHANGE_MOVIE_REFRESH_STATUS,
    movieRefreshStatus
  }
}

export const changeMusicRefreshStatus = (musicRefreshStatus) => {
  return {
    type: CHANGE_MUSIC_REFRESH_STATUS,
    musicRefreshStatus
  }
}

export const changeBookLoadMoreStatus = (bookLoadMoreStatus) => {
  return {
    type: CHANGE_BOOK_LOADMORE_STATUS,
    bookLoadMoreStatus
  }
}

export const changeMovieLoadMoreStatus = (movieLoadMoreStatus) => {
  return {
    type: CHANGE_MOVIE_LOADMORE_STATUS,
    movieLoadMoreStatus
  }
}

export const changeMusicLoadMoreStatus = (musicLoadMoreStatus) => {
  return {
    type: CHANGE_MUSIC_LOADMORE_STATUS,
    musicLoadMoreStatus
  }
}

export const changeBookLoadMoreSwitch = () => {
  return {
    type: CHANGE_BOOK_LOADMORE_SWITCH
  }
}

export const changeMovieLoadMoreSwitch = () => {
  return {
    type: CHANGE_MOVIE_LOADMORE_SWITCH
  }
}

export const changeMusicLoadMoreSwitch = () => {
  return {
    type: CHANGE_MUSIC_LOADMORE_SWITCH
  }
}

export const changeBookOffset = (bookOffset) => {
  return {
    type: CHANGE_BOOK_OFFSET,
    bookOffset
  }
}

export const changeMovieOffset = (movieOffset) => {
  return {
    type: CHANGE_MOVIE_OFFSET,
    movieOffset
  }
}

export const changeMusicOffset = (musicOffset) => {
  return {
    type: CHANGE_MUSIC_OFFSET,
    musicOffset
  }
}

export const getBookSrollY = (bookScrollY) => {
  return {
    type: GET_BOOK_SCROLL_Y,
    bookScrollY
  }
}

export const getMovieSrollY = (movieScrollY) => {
  return {
    type: GET_MOVIE_SCROLL_Y,
    movieScrollY
  }
}

export const getMusicSrollY = (musicScrollY) => {
  return {
    type: GET_MUSIC_SCROLL_Y,
    musicScrollY
  }
}

export const getLikeList = (likeList) => {
  return {
    type: GET_LIKE_LIST,
    likeList
  }
}
