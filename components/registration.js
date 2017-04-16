import React from 'react';

import TextField from './form-inputs/text-field.js'

import { Button, ButtonToolbar } from 'react-bootstrap';

class Registration extends React.Component {
  constructor () {
  super()
  this.state = {
    guest: {
    email: 'test@placeholder.com',
    validationCode: '1234',
    firstName: '',
    lastName: '',
    isComing: '',
    dinerChoice: '',
    allergies: '',
    personalMessage: '',
    isBringingGuest: '',
    guestFirstName: '',
    guestLastName: '',
    guestDinerChoice: '',
    guestAllergies: ''
    }
  },
    this.updatefield = this.updatefield.bind(this)
    this.submitGuest = this.submitGuest.bind(this)
  }

  updatefield (value, inputName) {
    var updatedguest = Object.assign(this.state.guest)
    updatedguest[inputName] = value
    this.setState({ guest: updatedguest })
  }

  submitGuest () {
    console.log(this.state.guest)
  }

  render () {
  return <div className="app-container verticalPadding">
    <form>
      <TextField  inputType="text"
                  inputLabel="First Name"
                  inputName="firstName"
                  updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                  fieldValue={ this.state.guest.firstName }
                  />
      <TextField  inputType="text"
                  inputLabel="Last Name"
                  inputName="lastName"
                  updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                  fieldValue={ this.state.guest.lastName }
                  />
      <TextField  inputType="radio"
                  radioValue={['yes', 'no']}
                  inputName="isComing"
                  inputLabel="Will you be joining us?"
                  updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                  fieldValue={ this.state.guest.isComing }
                  />
      { this. state.guest.isComing === 'yes' ?
        <div>
          <TextField  inputType="radio" 
                      radioValue={['Chicken', 'Beef', 'Vegetarian']}
                      inputName="dinerChoice"
                      inputLabel="What would you like for dinner?"
                      updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                      fieldValue={ this.state.guest.dinerChoice }
                      />
          <TextField  inputType="textarea"
                      inputLabel="Any allergies or dietary preferences?"
                      inputName="allergies"
                      updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                      fieldValue={ this.state.guest.allergies }
                      />
          <TextField  inputType="textarea"
                      inputLabel="Any message for the Bride and Groom? "
                      inputName="personalMessage"
                      updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                      fieldValue={ this.state.guest.personalMessage }
                      />
          <TextField  inputType="radio"
                      radioValue={['yes', 'no']}
                      inputName="isBringingGuest"
                      inputLabel="Will you bring a guest with you?"
                      updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                      fieldValue={ this.state.guest.isBringingGuest }
                      />
          { this. state.guest.isBringingGuest === 'yes' ?
            <div className="app-container regitration-guestWrapper">
              <h3>Guest Information</h3>
              <TextField  inputType="text"
                          inputLabel="Guest First Name"
                          inputName="guestFirstName"
                          updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                          fieldValue={ this.state.guest.guestFirstName }
                          />
              <TextField  inputType="text"
                          inputLabel="Guest Last Name"
                          inputName="guestLastName"
                          updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                          fieldValue={ this.state.guest.guestLastName }
                          />
              <TextField  inputType="radio" 
                          radioValue={['Chicken', 'Beef', 'Vegetarian']}
                          inputName="guestDinerChoice"
                          inputLabel="Guest dinner choice?"
                          updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                          fieldValue={ this.state.guest.guestDinerChoice }
                          />
              <TextField  inputType="textarea"
                          inputLabel="Any allergies or dietary preferences?"
                          inputName="guestAllergies"
                          updateFieldState={ (value, inputName) => this.updatefield(value, inputName) }
                          fieldValue={ this.state.guest.guestAllergies }
                          />
            </div>
          : null }
        </div>
      : null }
      <Button bsStyle="primary" onClick={() => this.submitGuest()}>Submit</Button>
    </form>
  </div>
  }
}

export default Registration