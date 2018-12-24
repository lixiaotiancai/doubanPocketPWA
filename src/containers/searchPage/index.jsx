import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../../router/history'
import config from '../../config'
import { getJson, getSearchResultArrName } from '../../assets/util'
import {
  changePage,
  changeSearchText,
  getBookList,
  getMovieList,
  getMusicList,
  getBookDetail,
  getMovieDetail,
  getMusicDetail,
  changeStartY,
  changeMoveY,
  changeBookRefreshStatus,
  changeMovieRefreshStatus,
  changeMusicRefreshStatus,
  changeBookLoadMoreStatus,
  changeMovieLoadMoreStatus,
  changeMusicLoadMoreStatus,
  changeBookLoadMoreSwitch,
  changeMovieLoadMoreSwitch,
  changeMusicLoadMoreSwitch,
  changeBookOffset,
  changeMovieOffset,
  changeMusicOffset,
  getBookSrollY,
  getMovieSrollY,
  getMusicSrollY
} from '../../actions'

import Search from '../../components/search'
import SlideSlot from '../../components/slideSlot'
import List from '../../components/list'
import NavBar from '../../components/navBar'
import ToTop from '../../components/toTop'
import ToHome from '../../components/toHome'

class SearchPage extends Component {
  async getInfo (pageId, value) {
    try {
      const { getList, changeSearchText, changeStartOffset } = this.props

      await changeSearchText(value)

      const searchText = this.props.searchText
      const json = await getJson(pageId, searchText, 0)
      const arrName = getSearchResultArrName(pageId)

      changeStartOffset(pageId, 0)

      getList(pageId, json[arrName])
    } catch (err) {
      console.log(err)
    }
  }

  async slideSlotTouchStart (e) {
    const { changeStartY } = this.props
    const touch = e.touches[0]
    const startY = touch.pageY

    changeStartY(startY)
  }

  async slideSlotTouchMove (e, listWrapper) {
    const {
      pageId,
      searchText,
      list,
      getList,
      startY,
      loadmoreSwitch,
      offset,
      changeRefreshStatus,
      changeLoadMoreStatus,
      changeLoadMoreSwitch,
      changeStartOffset
    } = this.props
    const touch = e.touches[0]
    const moveY = touch.pageY - startY // move时的Y坐标

    if (window.scrollY === 0 && moveY >= 0) {
      e.preventDefault()

      listWrapper.style.top = moveY + 'px'

      if (moveY >= 40) {
        changeRefreshStatus(pageId, config.refresh.status.start)
      } else {
        changeRefreshStatus(pageId, config.refresh.status.prepare)
      }
    }

    if (window.scrollY + window.innerHeight === document.body.scrollHeight && loadmoreSwitch === true) {
      changeStartOffset(pageId, offset + config.searchListCount)
      changeLoadMoreStatus(pageId, config.loadmore.status.loading)
      changeLoadMoreSwitch(pageId)
      const json = await getJson(pageId, searchText, this.props.offset)
      if (offset + config.searchListCount >= json.total) {
        changeLoadMoreStatus(pageId, config.loadmore.status.loadAll)
        changeLoadMoreSwitch(pageId)
      } else {
        const arrName = await getSearchResultArrName(pageId)
        const arr = await list.concat(json[arrName])
        getList(pageId, arr)
        changeLoadMoreStatus(pageId, config.loadmore.status.prepare)
        changeLoadMoreSwitch(pageId)
      }
    }
  }

  async slideSlotTouchEnd (e, listWrapper) {
    const {
      pageId,
      searchText,
      getList,
      refreshStatus,
      offset,
      changeRefreshStatus,
      changeLoadMoreStatus,
      changeLoadMoreSwitch,
      changeStartOffset,
      getScrollY
    } = this.props

    getScrollY(pageId, window.scrollY)

    if (refreshStatus === config.refresh.status.prepare) {
      listWrapper.style.top = 0
    } else if (refreshStatus === config.refresh.status.start) {
      changeRefreshStatus(pageId, config.refresh.status.refreshing)
      changeStartOffset(pageId, 0)
      listWrapper.style.top = 40 + 'px'
      const json = await getJson(pageId, searchText, 0)
      if (offset + config.searchListCount < json) {
        changeLoadMoreStatus(pageId, config.loadmore.status.prepare)
        changeLoadMoreSwitch(pageId)
      }
      const arrName = getSearchResultArrName(pageId)
      getList(pageId, json[arrName])
      changeRefreshStatus(pageId, config.refresh.status.complete)

      await window.setTimeout(() => {
        listWrapper.style.top = 0
        changeRefreshStatus(pageId, config.refresh.status.prepare)
      }, 500)
    }
  }

  async listClick (item) {
    const { pageId, getDetail } = this.props

    await getDetail(pageId, item)
    history.push(`/${pageId}/detail`)
    window.scrollTo(0, 0)
  }

  async navBarClick (pageId) {
    const { changePage } = this.props

    await changePage(pageId)

    window.scrollTo(0, this.props.scrollY)

    const { list } = this.props

    if (list === undefined) {
      const { getList, searchText } = this.props
      const json = await getJson(pageId, searchText, 0)
      const arrName = getSearchResultArrName(pageId)

      getList(pageId, json[arrName])
    }
  }

  toHomeClick () {
    history.push('/')
  }

  toTopClick () {
    const { pageId, getScrollY } = this.props
    window.scrollTo(0, 0)
    getScrollY(pageId, 0)
  }

  render () {
    const {
      pageId,
      list,
      changePage,
      getList,
      placeholder,
      searchText,
      changeSearchText,
      changeStartOffset,
      getDetail,
      refreshStatus,
      loadmoreStatus
    } = this.props

    return (
      <div className='searchPage'>
        <Search
          pageId={pageId}
          getList={getList}
          placeholder={placeholder}
          searchText={searchText}
          changeSearchText={changeSearchText}
          changeStartOffset={changeStartOffset}
          getInfo={(pageId, value) => this.getInfo(pageId, value)}
        />

        <SlideSlot
          refreshStatus={refreshStatus}
          loadmoreStatus={loadmoreStatus}
          slideSlotTouchStart={(e) => this.slideSlotTouchStart(e)}
          slideSlotTouchMove={(e, listWrapper) => this.slideSlotTouchMove(e, listWrapper)}
          slideSlotTouchEnd={(e, listWrapper) => this.slideSlotTouchEnd(e, listWrapper)}
        >
          <List
            pageId={pageId}
            list={list}
            getDetail={getDetail}
            listClick={(item) => this.listClick(item)}
          />
        </SlideSlot>

        <ToHome toHomeClick={() => this.toHomeClick()} />

        <ToTop toTopClick={() => this.toTopClick()} />

        <NavBar
          pageId={pageId}
          changePage={changePage}
          list={list}
          searchText={searchText}
          getList={getList}
          navBarClick={(pageId) => { this.navBarClick(pageId) }}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const pageId = state.changePage.pageId
  return {
    pageId: pageId,
    placeholder: state.changePage.placeholder,
    list: state.getList[pageId],
    searchText: state.changeSearchText.searchText,
    startY: state.changeScrollY.startY,
    moveY: state.changeScrollY.moveY,
    refreshStatus: state.changeRefreshStatus[pageId],
    loadmoreStatus: state.changeLoadMoreStatus[pageId],
    loadmoreSwitch: state.changeLoadMoreSwitch[pageId],
    offset: state.changeStartOffset[pageId],
    scrollY: state.getScrollY[pageId]
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getList: (pageId, arr) => {
      switch (pageId) {
        case 'book':
          dispatch(getBookList(arr))
          break
        case 'movie':
          dispatch(getMovieList(arr))
          break
        case 'music':
          dispatch(getMusicList(arr))
          break
        default:
          break
      }
    },
    getDetail: (pageId, obj) => {
      switch (pageId) {
        case 'book':
          dispatch(getBookDetail(obj))
          break
        case 'movie':
          dispatch(getMovieDetail(obj))
          break
        case 'music':
          dispatch(getMusicDetail(obj))
          break
        default:
          break
      }
    },
    changeRefreshStatus: (pageId, status) => {
      switch (pageId) {
        case 'book':
          dispatch(changeBookRefreshStatus(status))
          break
        case 'movie':
          dispatch(changeMovieRefreshStatus(status))
          break
        case 'music':
          dispatch(changeMusicRefreshStatus(status))
          break
        default:
          break
      }
    },
    changeLoadMoreStatus: (pageId, status) => {
      switch (pageId) {
        case 'book':
          dispatch(changeBookLoadMoreStatus(status))
          break
        case 'movie':
          dispatch(changeMovieLoadMoreStatus(status))
          break
        case 'music':
          dispatch(changeMusicLoadMoreStatus(status))
          break
        default:
          break
      }
    },
    changeLoadMoreSwitch: (pageId) => {
      switch (pageId) {
        case 'book':
          dispatch(changeBookLoadMoreSwitch())
          break
        case 'movie':
          dispatch(changeMovieLoadMoreSwitch())
          break
        case 'music':
          dispatch(changeMusicLoadMoreSwitch())
          break
        default:
          break
      }
    },
    changeStartOffset: (pageId, offset) => {
      switch (pageId) {
        case 'book':
          dispatch(changeBookOffset(offset))
          break
        case 'movie':
          dispatch(changeMovieOffset(offset))
          break
        case 'music':
          dispatch(changeMusicOffset(offset))
          break
        default:
          break
      }
    },
    getScrollY: (pageId, scrollY) => {
      switch (pageId) {
        case 'book':
          dispatch(getBookSrollY(scrollY))
          break
        case 'movie':
          dispatch(getMovieSrollY(scrollY))
          break
        case 'music':
          dispatch(getMusicSrollY(scrollY))
          break
        default:
          break
      }
    },
    changePage: (pageId) => dispatch(changePage(pageId)),
    changeSearchText: (searchText) => dispatch(changeSearchText(searchText)),
    changeStartY: (startY) => dispatch(changeStartY(startY)),
    changeMoveY: (moveY) => dispatch(changeMoveY(moveY))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
