import React, { Component } from 'react'

class ToHome extends Component {
  handleClick () {
    this.props.toHomeClick()
  }

  render () {
    return (
      <div className='toHome-wrapper' onClick={() => this.handleClick()}>
        <i className='toHome iconfont icon-home' />
      </div>
    )
  }
}

export default ToHome
