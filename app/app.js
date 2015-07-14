import React from 'react'
import Router from 'react-router'
import { Route, RouteHandler } from 'react-router'

import Scale from './components/Scale.js'
import Transport from './components/Transport.js'

let App = React.createClass({
  render () {
    return (
      <div className='app'>
        <RouteHandler/>
      </div>
    )
  }
})

// declare our routes and their hierarchy
let routes = (
  <Route handler={App}>
    <Route path='/' handler={Transport}>
      <Route path='scale/:root' handler={Scale}/>
      <Route path='scale/:root/:decimal' handler={Scale}/>
      <Route path='scale/:root/:decimal/:name' handler={Scale}/>
    </Route>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body)
})
