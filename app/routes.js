import React from 'react'
import { Route, RouteHandler, Redirect } from 'react-router'

import App from './components/App.js'
import Heptatonics from './components/Heptatonics.js'
import Scale from './components/Scale.js'
import Scales from './components/Scales.js'
import Chords from './components/Chords.js'
import Tonality from './components/Tonality.js'

// Hack to get App component get root param
let Container = React.createClass({
  render () { return <RouteHandler /> }
})

// declare our routes and their hierarchy
let routes = (
  <Route handler={Container}>
    <Redirect from='/' to='/C/tonality' />
    <Route path='/:root' handler={App}>
      <Route path='tonality' handler={Tonality}/>
      <Route path='scales' handler={Scales}/>
      <Route path='heptatonics' handler={Heptatonics}/>
      <Route path='chords' handler={Chords}/>
      <Route path='chord/:name' handler={Chords}/>
      <Route path='scales/:type' handler={Scales}/>
      <Route path='scale/:scale' handler={Scale}/>
    </Route>
  </Route>
)

export default routes
