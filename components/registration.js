import React from 'react';

import TextField from './form-inputs/text-field.js'

class Registration extends React.Component {
  constructor () {
    super()
    this.state = {
    	registrant: {
    		lastName: '',
    		firstName: '',
        isComing: false,
        diner: 'chicken',
        allergies: '',
        personalMessage: ''
    	}
    },
    this.updatefield = this.updatefield.bind(this)
  }

  updatefield (value, inputName) {
    console.log(value, inputName)
    var updatedRegistrant = Object.assign(this.state.registrant)
    updatedRegistrant[inputName] = value
    this.setState({ regitrant: updatedRegistrant })
  }

  render () {
    return <div>
    	<form>
        <TextField  inputLabel="First Name"
                    inputName="firstName"
                    inputType="text"
                    updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                    fieldValue={ this.state.registrant.firstName }
                    />
        <TextField  inputLabel="Last Name"
                    inputName="lastName"
                    inputType="text"
                    updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                    fieldValue={ this.state.registrant.lastName }
                    />
        <TextField  inputLabel="Do you have any allergies, you piece of shit?"
                    inputName="allergies"
                    inputType="textarea"
                    updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                    fieldValue={ this.state.registrant.allergies }
                    />
        <TextField  inputLabel="Any shit you wanna tell us?"
                    inputName="personalMessage"
                    inputType="textarea"
                    updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                    fieldValue={ this.state.registrant.personalMessage }
                    />
    	</form>
    </div>
  }
}

export default Registration