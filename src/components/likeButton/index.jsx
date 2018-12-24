import React, { Component } from 'react'

class BackButton extends Component {
  handleClick () {
    this.props.likeButtonClick(this.refs.likeIcon, this.refs.likeText)
  }

  render () {
    const iconCls = this.props.likeButtonIconCls()
    const text = this.props.likeButtonText()
    return (
      <div
        className='likeButton'
        onClick={() => this.handleClick()}
      >
        <i className={iconCls} ref='likeIcon' />
        <span ref='likeText'>{ text }</span>
      </div>

    )
  }
}

export default BackButton
