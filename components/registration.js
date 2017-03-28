import React from 'react';

import TextField from './form-inputs/text-field.js'

class Registration extends React.Component {
  constructor () {
    super()
    this.state = {
    	registrant: {
    		lastName: '',
    		firstName: 'Maxime',
        isComing: false,
        diner: 'chicken',
        allergies: 'yes',
        personalMessage: 'this is a message'
    	}
    },
    this.updatefield = this.updatefield.bind(this)
  }

  updatefield (value) {
    var updatedRegistrant = Object.assign(this.state.registrant)
    updatedRegistrant['lastName'] = value
    this.setState({ regitrant: updatedRegistrant })
  }

  render () {
    return <div>
    	<form>
    		<TextField  inputLabel="Last Name"
                    inputName="lastName"
                    updateFieldState={ (value) => this.updatefield(value) }
                    fieldValue={ this.state.registrant.lastName }
                    />
        <TextField  inputLabel="First Name"
                    inputName="firstName"
                    updateFieldState={ (value) => this.updatefield(value) }
                    fieldValue={ this.state.registrant.lastName }
                    />
    	</form>
    </div>
  }
}

export default Registration