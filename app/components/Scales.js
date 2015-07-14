import React from 'react'
import scales from 'musical-scales'
import Router from '../router.js'

const TYPES = ['1-note', 'interval', 'triad', 'cuatriad', 'pentatonic',
'hexatonic', 'heptatonic', 'octatonic', '9-notes', '10-notes', '11-notes', '12-notes']

let Scales = React.createClass({
  mixins: [Router],
  render () {
    let root = this.getRoot()
    let type = this.props.params.type
    if (!type) return this.renderIndex(root)
    else return this.renderType(root, type)
  }, renderIndex (root) {
    let types = TYPES.map((type) => {
      let href = this.routeTo('scales', type)
      return <li key={type}><a href={href}>{type} scales</a></li>
    })
    let named = scales.all()
      .filter((scale) => scale.names.length)
      .map((scale) => {
        return (
          <li key={scale.decimal}>
          <a href={this.routeTo('scale', scale.names[0])}>{scale.names[0]}</a>
          </li>
        )
      })

    return (
      <div>
        <h2>Named with {root}</h2>
        <ul className="scales">{named}</ul>
      </div>
    )
  },
  renderType (root, type) {
    let scalesByType = scales.all()
    .filter((scale) => {
      return scale.length === 3
    }).map((scale) => {
      let name = scale.names[0] ? scales.names[0] : scale.binary
      return (
        <li key={scale.decimal}>
          <a href={route(root, 'scale', name)}>
            {name} ({scale.decimal}) {scale.names}
          </a>
        </li>
      )
    })
    return (
      <div className="scalesType">
        <h2>{root} {type} scales</h2>
        <ul className="scaleList">{scalesByType}</ul>
      </div>
    )
  }
})

export default Scales
