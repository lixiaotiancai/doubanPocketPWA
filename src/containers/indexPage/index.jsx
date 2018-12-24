import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../../router/history'
import { getSearchResultArrName, getJson } from '../../assets/util'
import {
  changeSearchText,
  getBookList,
  getMovieList,
  getMusicList,
  getBookDetail,
  getMovieDetail,
  getMusicDetail,
  changePage
} from '../../actions'

import Logo from '../../components/Logo'
import Search from '../../components/search'
import LikeList from '../../components/likeList'

class IndexPage extends Component {
  async getInfo (pageId, value) {
    try {
      const { getList, changeSearchText, changeStartOffset } = this.props

      await changeSearchText(value)

      history.push(`/${pageId}/search`)

      const searchText = this.props.searchText
      const json = await getJson(pageId, searchText, 0)
      const arrName = getSearchResultArrName(pageId)

      if (changeStartOffset) changeStartOffset(pageId, 0)

      getList(pageId, json[arrName])
    } catch (err) {
      console.log(err)
    }
  }

  async likeListClick (item) {
    const { changePage, getDetail } = this.props
    await changePage(item.pageId)
    await getDetail(item.pageId, item)
    history.push(`/${item.pageId}/detail`)
  }

  render () {
    const { pageId, getList, placeholder, searchText, changeSearchText, likeList } = this.props

    return (
      <div className='indexPage'>
        <Logo />
        <Search
          pageId={pageId}
          getList={getList}
          placeholder={placeholder}
          searchText={searchText}
          changeSearchText={changeSearchText}
          getInfo={(pageId, value) => this.getInfo(pageId, value)}
        />
        <LikeList
          likeList={likeList}
          likeListClick={(item) => this.likeListClick(item)}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pageId: state.changePage.pageId,
    placeholder: state.changePage.placeholder,
    searchText: state.changeSearchText.searchText,
    likeList: state.getLikeList.likeList
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
    changePage: (pageId) => dispatch(changePage(pageId)),
    changeSearchText: (searchText) => dispatch(changeSearchText(searchText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
