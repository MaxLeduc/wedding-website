import React from 'react'

import StoryComponent from './storyComponent'
import RegisterCta from './cta/registerCta/index.js'

class MainPage extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return <div className="app-container">
    	<StoryComponent />
    	<RegisterCta />
    </div>
  }
}

export default MainPage