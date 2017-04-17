import React from 'react'
import $ from 'jquery'

import Nav from './nav'
import Hero from './hero'
import Footer from './footer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      greeting: 'Layout'
    }
  }

  render () {
    return <div>
      <Nav />
      <Hero />
      {this.props.children}
      <Footer />
    </div>
  }
}

export default App