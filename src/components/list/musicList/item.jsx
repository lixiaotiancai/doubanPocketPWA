import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'

class Item extends Component {
  handleClick () {
    this.props.listClick(this.props.item)
  }

  render () {
    const { item } = this.props
    const img = item.image ? item.image : '' // 获取图片
    const title = item.title ? item.title : '无相关标题信息' // 获取title
    const tags = item.tags ? item.tags : [] // 获取tags
    const rating = item.rating ? item.rating.average : '无相关评分信息'
    const authorMusic = item.author ? item.author[0] : {name: '无相关作者信息'}

    return (
      <div
        className='item-container--music'
        onClick={() => this.handleClick()}
      >

        <div className='item-img-wrapper'>
          <LazyLoad height={'100%'}>
            <img src={img} alt='封面' className='item-img' />
          </LazyLoad>
        </div>

        <div className='item-info-wrapper'>
          <span className='item-info-tt'>名称: {title}</span>

          <div className='item-info-tags'>
            {tags.map((item, index) => {
              if (index < 3) {
                return (
                  <span className='tags-item' key={index}>
                    {item.name}
                  </span>
                )
              }
            })
            }
          </div>

          <span className='item-info-author'>作者: {authorMusic.name}</span>

          <span className='item-info-rating'>评分: {rating}</span>
        </div>
      </div>
    )
  }
}

export default Item
