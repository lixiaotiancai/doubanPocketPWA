import React, { Component } from 'react'

class ToTop extends Component {
  handleClick () {
    this.props.toTopClick()
  }

  render () {
    return (
      <div className='toTop-wrapper' onClick={() => this.handleClick()}>
        <i className='toTop iconfont icon-top' />
      </div>
    )
  }
}

export default ToTop
