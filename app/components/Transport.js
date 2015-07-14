import React from 'react'
import { RouteHandler, Navigation, State } from 'react-router'

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
      return (
        <div>
          <h1>Root: {root}</h1>
          <div onClick={changeRoot}>E</div>
          <RouteHandler/>
        </div>
      )
    }
  }
})

export default Transport
