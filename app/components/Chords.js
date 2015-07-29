import React from 'react'
import Note from 'note-pitch'
import Router from '../router.js'
import Chords from '../../lib/chords.js'

let View = React.createClass({
  mixins: [Router],
  render () {
    let root = this.getRoot()
    let name = this.props.params.name.replace(/sharp/g, '#')
    if (!name) return this.renderIndex(root)
    else return this.renderChord(root, name)
  },
  renderChord(root, name) {
    let chord = Chords.get(name)
    let scales = Object.keys(chord.scales).map((base) => {
      let scaleRoot = Note.parse(Note.transpose(root, base)).pc
      return <a>{scaleRoot}</a>
    })
    return (
      <div>
        <h1>{root}{name} chord</h1>
        <h2>Voicings</h2>
        {voicings}
        <h2>Scales</h2>
        {scales}
        <textarea>{JSON.stringify(chord)}</textarea>
      </div>
    )
  },
  renderIndex(root) {
    var families = Chords.families.map((family) => {
      var chords = Chords.family(family).map((name) => {
        var href = this.routeTo(root, 'chord', name)
        return <a href={href} className='item' key={family + name}>{root}{name}</a>
      })
      return (
        <div className='item' key={family}>
          <h1>{root} {family} chords</h1>
          <div className='ui celled list'>{chords}</div>
        </div>
      )
    })
    return (
      <div className='chords ui list'>
        {families}
      </div>
    )
  }
})

export default View
