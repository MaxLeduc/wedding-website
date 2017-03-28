import React from 'react'
import $ from 'jquery'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      greeting: 'Home page'
    },
    this.getRequest = this.getRequest.bind(this)
  }

  render () {
    return <div>{ this.state.greeting }
      {this.props.children}
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