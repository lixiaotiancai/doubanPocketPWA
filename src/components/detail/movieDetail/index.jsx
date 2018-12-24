import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import config from '../../../config'

class MovieDetail extends Component {
  render () {
    const { detail } = this.props
    const img = detail.image || detail.images.small // img
    const nullImg = config.nullImg // 若图片不存在则启用设置中的备用图片
    const title = detail.title || '无相关名称信息' // tt
    const genres = detail.genres || []
    const year = detail.year || '无相关上映年份信息'
    const directorsArr = detail.directors.length ? detail.directors : [{name: '无相关导演信息'}]
    const originalTitle = detail.original_title || ''
    const casts = detail.casts.length ? detail.casts : [{avatars: {small: nullImg.src}}]
    return (
      <div className='content--movie'>

        <div className='content-abstract-container'>

          <div className='img-wrapper'>
            <LazyLoad height={'100%'}>
              <img src={img} alt='封面' className='abstract-img' />
            </LazyLoad>
          </div>
        </div>

        <div className='content-detail-container'>

          <div className='detail-summary'>

            <h1 className='detail-tt'>简介</h1>

            <div className='info-tt'>
              <span>名称: {title} </span>
              <span className='info-tags'>
                {genres.map((item, index) => {
                  if (index < 3) {
                    return (
                      <span className='tags-item' key={index}>
                        {item}
                      </span>
                    )
                  }
                })}
              </span>
            </div>

            <div className='info-year'>上映时间: {year}</div>

            <div className='info-directors-wrapper'>
              <span>导演: </span>
              {directorsArr.map((item, index) => {
                return (
                  <span key={index} className='info-directors'>{`${item.name}  `}</span>
                )
              })}
            </div>

            <div className='info-original-tt'>{`${title}(${originalTitle})`}</div>
          </div>

          <div className='detail-casts-container'>

            <h1 className='detail-tt'>演员</h1>
            <div className='detail-casts-avartar-container'>
              {casts.map((item, index) => {
                return (
                  <div key={index} className='casts-avatar-wrapper'>
                    <LazyLoad height={'100%'}>
                      <img src={item.avatars ? item.avatars.small : nullImg.src} alt='演员' className='casts-avatar' />
                    </LazyLoad>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetail
