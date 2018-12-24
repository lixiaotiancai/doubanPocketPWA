import React, { Component } from 'react'

import Item from './item'

class MovieList extends Component {
  render () {
    const { list, pageId, getDetail, listClick } = this.props

    return (
      <div>
        {list.map((item, index) => {
          return (
            <Item item={item} key={index} pageId={pageId} getDetail={getDetail} listClick={listClick} />
          )
        })}
      </div>
    )
  }
}

export default MovieList
