import React from 'react'
import { RouteHandler, Navigation, State } from 'react-router'

const NOTES = 'C D E F G A B'.split(' ')

let Transport = React.createClass({
  mixins: [Navigation, State],
  setRoot (root) {
    let path = this.getPath().split('/')
    path[1] = root
    this.transitionTo(path.join('/'))
  },
  render () {
    let path = this.getPath()
    let root = this.props.root
    let notes = NOTES.map((note) => {
      let href = '#/' + note + path.slice(2)
      return <a href={href} className='item' key={note}>{note}</a>
    })
    return (
      <div>
        <div className='ui bottom fixed menu'>
          <div className='ui container'>
            <div className='header item'>Root:</div>
            {notes}
          </div>
        </div>
      </div>
    )
  }
})

export default Transport
