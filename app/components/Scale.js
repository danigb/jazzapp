import React from 'react'

let Scale = React.createClass({
  render () {
    let root = this.props.params.root
    let decimal = this.props.params.decimal
    let name = this.props.params.name
    return (
      <div>
        <h2>Scale {root} {name} ({decimal})</h2>
      </div>
    )
  }
})

export default Scale
