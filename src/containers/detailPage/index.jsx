import React, { Component } from 'react'
import { connect } from 'react-redux'
import history from '../../router/history'
import { getLikeList } from '../../actions'

import Header from '../../components/header'
import BackButton from '../../components/backButton'
import LikeButton from '../../components/LikeButton'
import Detail from '../../components/detail'
import ToHome from '../../components/toHome'

class DetailPage extends Component {
  async backButtonClick () {
    const { pageId } = this.props

    await history.push(`/${pageId}/search`)

    window.scrollTo(0, this.props.scrollY)
  }

  likeButtonIconCls (detail, likeList) {
    return likeList.every((item) => { return item.id !== detail.id }) ? 'iconfont icon-like' : 'iconfont icon-like  icon-like-active'
  }

  likeButtonText (detail, likeList) {
    return likeList.every((item) => { return item.id !== detail.id }) ? '收藏' : '取消'
  }

  likeButtonClick (icon, text) {
    const { pageId, detail, likeList, getLikeList } = this.props

    if (likeList.every((item) => { return item.id !== detail.id })) {
      likeList.push(Object.assign(detail, {pageId: pageId}))
      getLikeList(likeList)
      icon.className = this.likeButtonIconCls(detail, likeList)
      text.innerHTML = this.likeButtonText(detail, likeList)
    } else {
      likeList.splice(likeList.indexOf(likeList.filter((item) => { return item.id === detail.id })[0]), 1)
      getLikeList(likeList)
      icon.className = this.likeButtonIconCls(detail, likeList)
      text.innerHTML = this.likeButtonText(detail, likeList)
    }
  }
  toHomeClick () {
    history.push('/')
  }

  render () {
    const { pageId, detail, likeList } = this.props
    return (
      <div className='detailPage'>
        <Header pageId={pageId}>
          <BackButton pageId={pageId} backButtonClick={() => this.backButtonClick()} />
          <LikeButton
            pageId={pageId}
            likeButtonClick={(icon, text) => this.likeButtonClick(icon, text)}
            likeButtonIconCls={() => this.likeButtonIconCls(detail, likeList)}
            likeButtonText={() => this.likeButtonText(detail, likeList)}
          />
        </Header>
        <Detail pageId={pageId} detail={detail} />
        <ToHome toHomeClick={() => this.toHomeClick()} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const pageId = state.changePage.pageId
  return {
    pageId: pageId,
    detail: state.getDetail[pageId],
    scrollY: state.getScrollY[pageId],
    likeList: state.getLikeList.likeList
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getLikeList: (likeList) => dispatch(getLikeList(likeList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
