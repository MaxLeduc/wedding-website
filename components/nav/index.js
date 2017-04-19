import React from 'react'

import { Link } from 'react-router'

const Nav = () => {
  return <nav className="app-container">
    <div className="nav-wrapper">
      <h4><Link to={`/`}>Maxime & Krystle's Wedding</Link></h4>
    </div>
  </nav>
}

export default Nav