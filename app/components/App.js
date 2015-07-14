import React from 'react'
import { Route, RouteHandler } from 'react-router'

import Navigation from './Navigation.js'
import Transport from './Transport.js'

let App = React.createClass({
  render () {
    let root = this.props.params.root
    return (
      <div className='app'>
        <Navigation root={root} />
        <div className='ui main text container'>
          <RouteHandler/>
        </div>
        <Transport root={root} />
      </div>
    )
  }
})

export default App
