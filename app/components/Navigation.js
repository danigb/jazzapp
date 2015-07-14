import React from 'react'
import { Route, RouteHandler } from 'react-router'
import route from '../router.js'

let Navigation = React.createClass({
  render () {
    let root = this.props.root
    return (
      <div className='ui inverted fixed menu'>
        <div className='ui container'>
          <div className='header item'>Jazzapp</div>
          <a href={route(root, 'tonality')} className='item'>Tonality</a>
          <a href={route(root, 'scales')} className='item'>Scales</a>
        </div>
      </div>
    )
  }
})

export default Navigation
