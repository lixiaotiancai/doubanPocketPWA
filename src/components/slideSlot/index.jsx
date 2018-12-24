import React, { Component } from 'react'

class SlideSlot extends Component {
  handleTouchStart (e) {
    this.props.slideSlotTouchStart(e)
  }

  handleTouchMove (e) {
    this.props.slideSlotTouchMove(e, this.refs.listWrapper)
  }

  handleTouchEnd (e) {
    this.props.slideSlotTouchEnd(e, this.refs.listWrapper)
  }

  // 组件渲染完成后添加事件
  componentDidMount () {
    const listContainer = this.refs.listContainer

    listContainer.addEventListener('touchstart', (e) => { this.handleTouchStart(e) }, false)
    listContainer.addEventListener('touchmove', (e) => { this.handleTouchMove(e) }, false)
    listContainer.addEventListener('touchend', (e) => { this.handleTouchEnd(e) }, false)
  }

  // 组件卸载前移除事件
  componentWillUnmount () {
    const listContainer = this.refs.listContainer

    listContainer.removeEventListener('touchstart', (e) => { this.handleTouchStart(e) })
    listContainer.removeEventListener('touchmove', (e) => { this.handleTouchMove(e) })
    listContainer.removeEventListener('touchend', (e) => { this.handleTouchEnd(e) })
  }

  render () {
    const { refreshStatus, loadmoreStatus } = this.props

    const refreshText = refreshStatus.text
    const loadmoreText = loadmoreStatus.text

    return (
      <div className='slideSlot-container'>
        <div className='slideSlot'>
          <div className='list-container' ref='listContainer'>
            <div className='refresh' ref='refresh'>
              <div className='refresh-txt'>{ refreshText }</div>
            </div>
            <div className='list-wrapper' ref='listWrapper'>

              { this.props.children }

            </div>
            <div className='loadmore' ref='loadmore'>{ loadmoreText }</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SlideSlot
