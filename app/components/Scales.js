import React from 'react'
import Tonal from 'tonal'
import BinaryScale from './BinaryScale.js'
import Router from '../router.js'

let Scales = React.createClass({
  mixins: [Router],
  renderGroup (num) {
    let root = this.getRoot()
    let scales = Tonal.Scale.all().filter(function (scale) {
      return scale.length === num
    }).map(function (scale) {
      return <BinaryScale key={scale.decimal} root={root} binary={scale.binary} />
    })
    return (
      <div key={'scaleGroup' + num} className='five wide column'>
        <h3>{num}-note scales</h3>
        {scales}
      </div>
    )
  },
  render () {
    let groups = [3, 4, 5, 6, 7, 8].map(this.renderGroup)
    return (
      <div className='scales ui grid'>
        {groups}
      </div>
    )
  }
})

export default Scales
