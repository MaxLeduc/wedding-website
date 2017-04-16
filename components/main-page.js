import React from 'react'

import StoryComponent from './frontPage/ourStory.js'
import RegisterCta from './cta/registerCta/'
import DetailsComponent from './frontPage/details.js'
import FaqComponent from './frontPage/faq.js'

class MainPage extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return <div className="app-container">
    	<StoryComponent />
      <DetailsComponent />
    	<RegisterCta />
      <FaqComponent />
    </div>
  }
}

export default MainPage