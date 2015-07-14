import React from 'react'
import Scales from 'musical-scales'
import Note from 'note-pitch'
import spell from 'scale-spell'

let Scale = React.createClass({
  render () {
    let root = this.props.params.root
    let identifier = this.props.params.scale
    let scale = Scales.get(identifier)
    if (!scale) return <h2>Scale {identifier} not found.</h2>
    return (
      <div>
        <h2>Scale {root} {scale.names[0]} ({scale.decimal})</h2>
        <h3>{scale.binary}</h3>
        {spell(scale.binary)}
        {Note.transpose(root, spell(scale.binary))}
      </div>
    )
  }
})

export default Scale
