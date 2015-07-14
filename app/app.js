import React from 'react'
import Router from 'react-router'
import { Route, RouteHandler } from 'react-router'

import Scale from './components/Scale.js'
import Transport from './components/Transport.js'

let App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='ui inverted fixed menu'>
          <div className='ui container'>
            <div className='header item'>Jazzapp</div>
            <a href='#/tonality' className='item'>Tonality</a>
            <div className='item'>Scales</div>
          </div>
        </div>
        <RouteHandler/>
      </div>
    )
  }
})

// declare our routes and their hierarchy
let routes = (
  <Route handler={App}>
    <Route path='/:root' handler={Transport}>
      <Route path='scales' handler={Scale}/>
      <Route path='scales/:decimal' handler={Scale}/>
      <Route path='scales/:decimal/:name' handler={Scale}/>
    </Route>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body)
})
