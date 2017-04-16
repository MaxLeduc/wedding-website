import React from 'react'

import { Button } from 'react-bootstrap';
import { Link } from 'react-router'

const RegisterCta = () => {
  return <div className="registerCta-wrapper">
    <Link to={`/registration`}><Button bsStyle="primary">Register Now!</Button></Link>
  </div>
}

export default RegisterCta