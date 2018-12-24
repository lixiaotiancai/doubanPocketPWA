import React, { Component } from 'react'
import { getPageName } from '../../assets/util'

class LikeList extends Component {
  handleClick (item) {
    this.props.likeListClick(item)
  }

  render () {
    const { likeList } = this.props

    let likeListComponent

    if (likeList === undefined || likeList.length === 0) {
      likeListComponent = (
        <div className='likeList-none-wrapper'>
          <div className='likeList-none'>什么都没有哦~: (</div>
        </div>
      )
    } else {
      likeListComponent = (
        likeList.map((item, index) => {
          return (
            <div
              key={index}
              className='likeList-item'
              onClick={() => this.handleClick(item)}>
              [{getPageName(item.pageId)}] { item.title }
            </div>
          )
        })
      )
    }

    return (
      <div className='likeList-container'>
        <div className='likeList'>
          <div className='likeList-tt'>我的收藏</div>
          <div className='likeList-wrapper'>
            { likeListComponent }
          </div>
        </div>
      </div>
    )
  }
}

export default LikeList
