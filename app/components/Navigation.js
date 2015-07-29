import React from 'react'
import Router from '../router.js'

let Navigation = React.createClass({
  mixins: [Router],
  propTypes: {
    root: React.PropTypes.string
  },
  render () {
    let root = this.props.root
    return (
      <div className='ui inverted fixed menu'>
        <div className='ui container'>
          <div className='header item'>Jazzapp</div>
          <a href={this.routeTo(root, 'tonality')} className='item'>Tonality</a>
          <a href={this.routeTo(root, 'scales')} className='item'>Scales</a>
          <a href={this.routeTo(root, 'chords')} className='item'>Chords</a>
        </div>
      </div>
    )
  }
})

export default Navigation
