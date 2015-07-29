import React from 'react'
import Router from '../router.js'
import classNames from 'classnames'

let View = React.createClass({
  mixins: [Router],
  propTypes: {
    root: React.PropTypes.string,
    name: React.PropTypes.string,
    binary: React.PropTypes.string
  },
  render () {
    let root = this.props.root
    let digits = this.props.binary.split('').map((digit) => {
      let classes = classNames('digit', { one: digit === '1'})
      return <div className={classes}>{digit}</div>
    })
    let href = this.routeTo(root, 'scale', this.props.name || this.props.binary)
    return (
      <a href={href} className='binary-scale item'>
        {digits} {this.props.name}
      </a>
    )
  }
})

export default View
