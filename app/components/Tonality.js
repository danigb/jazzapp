import React from 'react'
import Router from '../router.js'
import Tonality from '../../lib/tonality.js'
import scaleNotes from '../../lib/scale-notes.js'
import Scales from 'musical-scales'
import NotesStave from './NotesStave.js'

let View = React.createClass({
  mixins: [Router],
  render () {
    let root = this.getRoot()
    let tonality = new Tonality(root)
    return (
      <div>
        <h2>Tonality of {root}</h2>
        <a href={this.routeTo(root, 'scale', 'major')}>{root} major scale</a>
        <a href={this.routeTo(tonality.minor, 'scale', 'aeolian')}>{tonality.minor} minor scale</a>
      </div>
    )
  }
})

export default View
