import React from 'react'
import { RouteHandler, Navigation, State } from 'react-router'

const NOTES = 'C D E F G A B'.split(' ')

let Transport = React.createClass({
  mixins: [Navigation, State],
  setRoot (root) {
    let path = this.getPath().split('/')
    path[2] = root
    this.transitionTo(path.join('/'))
  },
  render () {
    let root = this.props.params.root
    if (!/[ABCDEFG]/.test(root)) {
      this.setRoot('C')
      return <div />
    } else {
      let changeRoot = (e) => { this.setRoot(e.target.innerHTML) }
      let notes = NOTES.map((note) => {
        return <div className='item' key={note} onClick={changeRoot}>{note}</div>
      })
      return (
        <div>
          <div className='ui bottom fixed menu'>
            <div className='ui container'>
              {notes}
            </div>
          </div>
          <div className='ui main text container'>
            <RouteHandler/>
          </div>
        </div>
      )
    }
  }
})

export default Transport
