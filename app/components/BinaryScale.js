import React from 'react'
import Router from '../router.js'
import classNames from 'classnames'

let View = React.createClass({
  mixins: [Router],
  render () {
    let root = this.props.root
    let digits = this.props.binary.split('').map((digit) => {
      let classes = classNames('digit', { one: digit === '1'})
      return <div className={classes}>{digit}</div>
    })
    let name = !this.props.name ? '' :
      <a href={this.routeTo(root, 'scale', this.props.name)}>{this.props.name}</a>
    return (
      <div className="binary-scale item">
        {digits} {name}
      </div>
    )
  }
})

export default View
