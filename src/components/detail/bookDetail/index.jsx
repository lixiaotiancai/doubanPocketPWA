import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'

class BookDetail extends Component {
  render () {
    const { detail } = this.props
    const img = detail.image || ''
    const title = detail.title || '无相关名称信息' // tt
    const rating = detail.rating.average || '无相关评分信息' // rating
    const tags = detail.tags || [] // tags
    const authorArr = detail.author.length ? detail.author : ['无相关作者信息']
    const publisher = detail.publisher || '无出版社信息'
    const pubdate = detail.pubdate || '无相关出版时间信息'
    const price = detail.price || '无相关价格信息'
    const catalog = detail.catalog || '无相关序言信息'
    const summary = detail.summary || '无相关简介信息'

    return (
      <div className='content--book'>

        <div className='content-abstract-container'>
          <div className='img-wrapper'>
            <LazyLoad height={'100%'}>
              <img src={img} alt='封面' className='abstract-img' />
            </LazyLoad>
          </div>

          <div className='info-wrapper'>
            <div className='info-tt'>名称: {title}</div>

            <div>
              <span className='info-author'>作者: </span>
              {authorArr.map((item, index) => {
                return (
                  <span key={index}>item</span>
                )
              })}
            </div>

            <div className='info-publisher'>出版社: {publisher}</div>

            <div className='info-pubdate'>时间: {pubdate}</div>

            <div className='info-rating'>评分: {rating}</div>

            <div className='info-price'>价钱: {price}</div>

            <div className='info-tags'>
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
          </div>
        </div>

        <div className='content-detail-container'>

          <div className='detail-catalog'>
            <h1 className='detail-tt'>序言</h1>
            <p className='detail-p'>{catalog}</p>
          </div>

          <div className='detail-summary'>
            <h1 className='detail-tt'>简介</h1>
            <p className='detail-p'>{summary}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BookDetail
