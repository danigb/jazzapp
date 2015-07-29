import React from 'react'
import NotesStave from './NotesStave.js'
import BinaryScale from './BinaryScale.js'
import Router from '../router.js'
import Tonal from 'tonal'

let Scale = React.createClass({
  mixins: [Router],
  render () {
    let root = this.getRoot()
    let identifier = this.props.params.scale
    let scale = Tonal.scale(identifier)
    if (!scale) return <h2>Scale {identifier} not found.</h2>

    let names = scale.names().map((name) => {
      return <a className='item' key={name}>{name}</a>
    })
    let rootMode = Tonal.scale(scale.rootMode)
    let modes = scale.modes.map((binary) => {
      let scale = Tonal.scale(binary)
      return <BinaryScale key={binary} root={root} binary={binary} name={scale.names()[0]}/>
    })
    return (
      <div>
        <h2>Scale {root} {scale.names()[0]} ({scale.decimal})</h2>
        <div className='ui list'>{names}</div>
        <BinaryScale root={root} binary={scale.binary} name={scale.names()[0]} />
        <NotesStave notes={Tonal.scale(scale.decimal).notes(root)}/>
        <h3>Modes</h3>
        <h5>Root mode: {rootMode.names()[0]} ({rootMode.decimal})</h5>
        <div className='ui list'>
        {modes}
        </div>
      </div>
    )
  }
})

export default Scale
