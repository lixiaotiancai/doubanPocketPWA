import React, { Component } from 'react'
import config from '../../config'

import BookList from './bookList'
import MovieList from './movieList'
import MusicList from './musicList'

class List extends Component {
  render () {
    const { pageId, list, getDetail, listClick } = this.props
    const pageLoadingText = config.pageLoading.text
    const noSearchResourceText = config.noSearchResource.text

    let listComponent

    if (list === undefined) {
      listComponent = (
        <div className='loading-wrapper'>
          <div className='loading'>
            <div className='loading-animation'>
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
              <div className='pillar' />
            </div>
            <div>{pageLoadingText}</div>
          </div>
        </div>
      )
    } else if (!list.length) {
      listComponent = (
        <div className='none-wrapper'>
          <div className='none'>{noSearchResourceText}</div>
        </div>
      )
    } else {
      switch (pageId) {
        case 'book':
          listComponent = (
            <BookList list={list} pageId={pageId} getDetail={getDetail} listClick={listClick} />
          )
          break
        case 'movie':
          listComponent = (
            <MovieList list={list} pageId={pageId} getDetail={getDetail} listClick={listClick} />
          )
          break
        case 'music':
          listComponent = (
            <MusicList list={list} pageId={pageId} getDetail={getDetail} listClick={listClick} />
          )
          break
      }
    }

    return (
      <div className='searchlist-wrapper'>
        <div className='search-list'>
          { listComponent }
        </div>
      </div>
    )
  }
}

export default List
