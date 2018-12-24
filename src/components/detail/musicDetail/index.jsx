import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'

class MusicDetail extends Component {
  render () {
    const { detail } = this.props
    const img = detail.image || detail.images.small // img
    const title = detail.title || '无相关名称信息' // tt
    const rating = detail.rating.average || '无相关评分信息' // rating
    const tags = detail.tags || [] // tags
    const authorMusic = detail.author ? detail.author[0] : {name: '无相关作者信息'}
    const publisherMusic = detail.attrs.publisher ? detail.attrs.publisher[0] : '无相关发布商信息'
    const pubdateMusic = detail.attrs.pubdate ? detail.attrs.pubdate[0] : '无相关发布时间信息'
    const tracksArr = detail.attrs.tracks ? detail.attrs.tracks : ['无相关专辑信息']

    return (
      <div className='content--music'>
        <div className='content-abstract-container'>
          <div className='img-wrapper'>
            <LazyLoad height={'100%'}>
              <img src={img} alt='封面' className='abstract-img' />
            </LazyLoad>
          </div>

          <div className='info-wrapper'>
            <div className='info-tt'>
              <span>名称: {title} </span>
              <span className='info-tags'>
                {tags.map((item, index) => {
                  return (
                    <span className='tags-item' key={index}>
                      {item.name}
                    </span>
                  )
                })
                }
              </span>
            </div>

            <div className='info-author'>作者: {authorMusic.name}</div>

            <div className='info-publisher'>发布商: {publisherMusic}</div>

            <div className='info-pubdate'>发布时间: {pubdateMusic}</div>

            <div className='info-rating'>评分: {rating}</div>
          </div>
        </div>

        <div className='content-detail-container'>
          <div className='detail-summary'>
            <h1 className='detail-tt'>简介</h1>
          </div>

          <div className='detail-tracks'>
            <h1 className='detail-tt'>专辑</h1>
            {tracksArr.map((item, index) => {
              return (
                <div key={index} className='tracks-item'>{item}</div>
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default MusicDetail
