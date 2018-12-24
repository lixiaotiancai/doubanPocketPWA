import React, { Component } from 'react'
import { getHeaderText } from '../../assets/util'

class Header extends Component {
  render () {
    const { pageId } = this.props
    const headerText = getHeaderText(pageId)

    return (
      <div className='header-wrapper'>
        <div className='header'>
          { this.props.children }
          <div className='header-text'>{headerText}</div>
        </div>
      </div>
    )
  }
}

export default Header
