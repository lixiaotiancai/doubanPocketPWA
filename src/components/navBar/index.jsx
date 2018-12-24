import React, { Component } from 'react'
import config from '../../config'

import Item from './item'

class NavBar extends Component {
  render () {
    const { pageId, changePage, list, getList, searchText, navBarClick } = this.props
    const page = config.page

    return (
      <div className='navBar-wrapper'>
        <div className='navBar'>
          {page.map((item, index) => {
            return (
              <Item
                item={item}
                key={index}
                changePage={changePage}
                pageId={pageId}
                list={list}
                getList={getList}
                searchText={searchText}
                navBarClick={navBarClick}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default NavBar
