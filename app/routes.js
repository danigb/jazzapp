import React from 'react'
import Router from 'react-router'
import { Route, RouteHandler } from 'react-router'

import App from './components/App.js'
import Scale from './components/Scale.js'
import Scales from './components/Scales.js'
import Transport from './components/Transport.js'
import Tonality from './components/Tonality.js'

// Hack to get App component get root param
let Container = React.createClass({
  render () { return <RouteHandler /> }
})

// declare our routes and their hierarchy
let routes = (
  <Route handler={Container}>
    <Route path='/:root' handler={App}>
      <Route path='tonality' handler={Tonality}/>
      <Route path='scales' handler={Scales}/>
      <Route path='scales/:type' handler={Scales}/>
      <Route path='scale/:scale' handler={Scale}/>
    </Route>
  </Route>
)

export default routes
