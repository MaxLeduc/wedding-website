import React from 'react'

import { browserHistory } from 'react-router'

const Hero = () => {
  const location = browserHistory.getCurrentLocation()
  let heroClassNames = ''
  if (location.pathname == '/registration') {
    heroClassNames = "hero-wrapper hero-wrapper--lessPadding"
  } else {
    heroClassNames = "hero-wrapper"
  }

  return <div className={ heroClassNames }>
    <h1>Our Wedding</h1>
    <h3>June 23rd, 2018</h3>
    <h5>Hotel Nelligan, Montreal, Quebec</h5>
  </div>
}

export default Hero