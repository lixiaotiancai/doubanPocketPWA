import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'

class Item extends Component {
  handleClick () {
    this.props.listClick(this.props.item)
  }

  render () {
    const { item } = this.props
    const img = item.images ? item.images.small : ''
    const title = item.title ? item.title : '无相关标题信息' // 获取title
    const rating = item.rating ? item.rating.average : '无相关评分信息'
    const genres = item.genres ? item.genres : [] // 获取genres
    const casts = item.casts ? item.casts : [] // 获取演员数组

    return (
      <div
        className='item-container--movie'
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
            {genres.map((item, index) => {
              if (index < 3) {
                return (
                  <span className='tags-item' key={index}>
                    {item}
                  </span>
                )
              }
            })}
          </div>

          <div className='item-info-casts'>
            {casts.map((item, index) => {
              return (
                <span className='casts-item' key={index}>
                  {item.name}
                </span>
              )
            })}
          </div>

          <span className='item-info-rating'>评分: {rating}</span>
        </div>
      </div>
    )
  }
}

export default Item
