import React from 'react'
import Router from '../router.js'
import Tonal from 'tonal'
import NotesStave from './NotesStave.js'

let View = React.createClass({
  mixins: [Router],
  render () {
    let key = Tonal.keySignature(this.getRoot())
    let alterations = key.alterations().join(' ')
    if (alterations === '') alterations = 'none'

    let scale = (root, name, title) => {
      title = title || name
      return (
        <div className='scale'>
          <a href={this.routeTo(root, 'scale', name)}>{root} {title} scale</a>
          <NotesStave root={root} notes={Tonal.scale(name).notes(root)} />
        </div>
      )
    }

    return (
      <div>
        <h2>Tonality of {key.major}</h2>
        <h3>Alterations: {alterations}</h3>
        {scale(key.major, 'major')}
        {scale(key.major, 'melodic')}
        {scale(key.major, 'harmonic')}
        <h3>Relative minor: {key.minor} minor</h3>
        {scale(key.minor, 'aeolian')}
      </div>
    )
  }
})

export default View
