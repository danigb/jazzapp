import React from 'react'
import Tonal from 'tonal'
import Router from '../router.js'

let Heptatonics = React.createClass({
  mixins: [Router],
  renderMode (binary, scales) {
    scales = scales.map(function (scale) {
      let spell = scale.spell().map(function (inter) {
        return inter[1]
      }).join('')
      let spellStype = spell === '1234567' ? { border: '2px solid red' } : {}
      return (<div>
        <div style={spellStype}>{spell} {scale.names().join(' ')}</div>
      </div>)
    })
    return (
      <div key={binary}>
        <h2>Mode {binary}</h2>
        {scales}
      </div>
    )
  },
  render () {
    let heptatonics = Tonal.Scale.all().filter(function (scale) {
      return scale.length === 7
    })
    let index = {}
    heptatonics.forEach(function (scale) {
      index[scale.rootMode] = index[scale.rootMode] || []
      index[scale.rootMode].push(scale)
      return index
    })
    let modes = Object.keys(index).map((mode) => {
      return this.renderMode(mode, index[mode])
    })
    return (
      <div>
      <h1>Heptatonics modes</h1>
      {modes}
      </div>
    )
  }
})

export default Heptatonics
