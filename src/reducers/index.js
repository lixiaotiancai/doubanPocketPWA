import {
  combineReducers
} from 'redux'

import changePage from './changePage'
import changeSearchText from './changeSearchText'
import getList from './getList'
import getDetail from './getDetail'
import changeScrollY from './changeScrollY'
import changeRefreshStatus from './changeRefreshStatus'
import changeLoadMoreStatus from './changeLoadMoreStatus'
import changeLoadMoreSwitch from './changeLoadMoreSwitch'
import changeStartOffset from './changeStartOffset'
import getScrollY from './getScrollY'
import getLikeList from './getLikeList'

const rootReducer = combineReducers({
  changePage,
  changeSearchText,
  getList,
  getDetail,
  changeScrollY,
  changeRefreshStatus,
  changeLoadMoreStatus,
  changeLoadMoreSwitch,
  changeStartOffset,
  getScrollY,
  getLikeList
})

export default rootReducer
