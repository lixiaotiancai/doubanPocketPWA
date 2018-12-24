import React, { Component } from 'react'

import BookDetail from './bookDetail'
import MovieDetail from './movieDetail'
import MusicDetail from './musicDetail'

class Detail extends Component {
  render () {
    const { pageId, detail } = this.props

    let detailComponent

    switch (pageId) {
      case 'book':
        detailComponent = <BookDetail detail={detail} />
        break
      case 'movie':
        detailComponent = <MovieDetail detail={detail} />
        break
      case 'music':
        detailComponent = <MusicDetail detail={detail} />
        break
    }

    return (
      <div className='detail-wrapper'>
        <div className='detail'>
          { detailComponent }
        </div>
      </div>
    )
  }
}

export default Detail
