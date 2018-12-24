import React, { Component } from 'react'
import { getReturnButtonText } from '../../assets/util'

class BackButton extends Component {
  handleClick () {
    this.props.backButtonClick()
  }

  render () {
    const { pageId } = this.props
    const returnBtnTxt = getReturnButtonText(pageId)

    return (
      <div
        onClick={this.handleClick.bind(this)}
        className='backButton'
      >
        <i className='iconfont icon-back' />
        <span>{returnBtnTxt}</span>
      </div>

    )
  }
}

export default BackButton
