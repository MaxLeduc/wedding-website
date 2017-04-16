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
    },
    this.getRequest = this.getRequest.bind(this)
  }

  render () {
    return <div>
      <Nav />
      <Hero />
      {this.props.children}
      <Footer />
    </div>
  }

  componentDidMount () {
    this.getRequest()
  }

  getRequest () {
    $.get('/api/guests')
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default App