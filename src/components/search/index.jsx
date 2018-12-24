import React, { Component } from 'react'

class Search extends Component {
  handleKeyUp (e, pageId) {
    if (e.keyCode === 13) {
      this.props.getInfo(pageId, this.refs.search.value)
    }
  }

  handleClick (pageId) {
    this.props.getInfo(pageId, this.refs.search.value)
  }

  componentDidMount () {
    const { searchText } = this.props

    this.refs.search.value = searchText
  }

  render () {
    const { pageId, placeholder } = this.props
    return (
      <div className='search-wrapper'>
        <div className='search'>
          <input
            type='text'
            className='search-input'
            ref='search'
            placeholder={placeholder}
            onKeyUp={(e) => this.handleKeyUp(e, pageId)}
          />

          <i className='iconfont icon-search' />

          <input
            type='button'
            value='搜索'
            className='search-btn'
            onClick={() => this.handleClick(pageId)}
          />
        </div>
      </div>
    )
  }
}

export default Search
