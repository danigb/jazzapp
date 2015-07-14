import React from 'react'

let Scale = React.createClass({
  render () {
    let root = this.props.params.root
    let href = (path) => '#/' + root + '/' + path
    return (
      <div>
        <h2>Tonality of {root}</h2>
        <a href={href('scales/major')}>{root} major scale</a>
      </div>
    )
  }
})

export default Scale
