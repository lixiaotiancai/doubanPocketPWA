import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Item extends Component {
  handleClick (pageId) {
    this.props.navBarClick(pageId)
  }

  render () {
    const { item } = this.props
    const name = item.pageName
    const icon = item.icon
    const pageId = item.pageId
    const ActivePageId = this.props.pageId
    const isActive = pageId === ActivePageId
    const activeCls = isActive ? 'active-item' : ''

    return (
      <Link
        to={`/${pageId}/search`}
        className={'navBar-item ' + activeCls}
        onClick={() => this.handleClick(pageId)}
      >
        <i className={'navBar-item-icon iconfont icon-' + icon} />
        <div className='navBar-item-text'>{ name }</div>
      </Link>
    )
  }
}

export default Item
