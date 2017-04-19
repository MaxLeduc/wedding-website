import React from 'react';

import TextField from './form-inputs/text-field.js'
import $ from 'jquery'

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
      isComing: false,
      dinerChoice: '',
      allergies: '',
      personalMessage: '',
      isBringingGuest: false,
      guestFirstName: '',
      guestLastName: '',
      guestDinerChoice: '',
      guestAllergies: ''
    },
    food: []
  }
    this.updatefield = this.updatefield.bind(this)
    this.submitGuest = this.submitGuest.bind(this)
    this.getRequest = this.getRequest.bind(this)
  }

  updatefield (value, inputName, typeOf) {
    if (typeOf == 'bool') {
      value = (value == 'true')
    }
    var updatedguest = Object.assign(this.state.guest)
    updatedguest[inputName] = value
    this.setState({ guest: updatedguest })
  }

  getRequest () {
    $.get('/api/food')
    .then(data => {
      this.setState({food: data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  //need some kind of field validation
  //make modal for email address and code
  //make thank you submission thing

  submitGuest () {
    if (this.state.guest.firstName && this.state.guest.lastName) {
      console.log('boom... api call')
      $.ajax({
        method: "POST",
        url: "/api/guests",
        data: JSON.stringify({ url: this.state.guest }),
        contentType: "application/json"
        })
      .then(() => {
        this.setState({newImage: ''})
      })
    } else {
      alert('Woah, can\'t do that')
    }
  }

  componentDidMount () {
    this.getRequest()
  }

  render () {
    return <div className="app-container regitration-guestWrapper">
      <div>
        <h3 className="registration-title">Guest Information</h3>
        <TextField  inputType="text"
                    inputLabel="First Name"
                    inputName="firstName"
                    updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                    fieldValue={ this.state.guest.firstName }
                    />
        <TextField  inputType="text"
                    inputLabel="Last Name"
                    inputName="lastName"
                    updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                    fieldValue={ this.state.guest.lastName }
                    />
        <TextField  inputType="bool"
                    radioValue={[true, false]}
                    inputName="isComing"
                    inputLabel="Will you be joining us?"
                    updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                    fieldValue={ this.state.guest.isComing }
                    />
        { this.state.guest.isComing ?
          <div>
            <TextField  inputType="radio" 
                        radioValue={this.state.food}
                        inputName="dinerChoice"
                        inputLabel="What would you like for dinner?"
                        updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                        fieldValue={ this.state.guest.dinerChoice }
                        />
            <TextField  inputType="textarea"
                        inputLabel="Any allergies or dietary preferences?"
                        inputName="allergies"
                        updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                        fieldValue={ this.state.guest.allergies }
                        />
            <TextField  inputType="textarea"
                        inputLabel="Any message for the Bride and Groom? "
                        inputName="personalMessage"
                        updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                        fieldValue={ this.state.guest.personalMessage }
                        />
            <TextField  inputType="bool"
                        radioValue={[true, false]}
                        inputName="isBringingGuest"
                        inputLabel="Will you bring a guest with you?"
                        updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                        fieldValue={ this.state.guest.isBringingGuest }
                        />
            { this. state.guest.isBringingGuest ?
              <div>
                <h3 className="registration-title">+1 Information</h3>
                <TextField  inputType="text"
                            inputLabel="Guest First Name"
                            inputName="guestFirstName"
                            updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                            fieldValue={ this.state.guest.guestFirstName }
                            />
                <TextField  inputType="text"
                            inputLabel="Guest Last Name"
                            inputName="guestLastName"
                            updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                            fieldValue={ this.state.guest.guestLastName }
                            />
                <TextField  inputType="radio" 
                            radioValue={this.state.food}
                            inputName="guestDinerChoice"
                            inputLabel="Guest dinner choice?"
                            updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                            fieldValue={ this.state.guest.guestDinerChoice }
                            />
                <TextField  inputType="textarea"
                            inputLabel="Any allergies or dietary preferences?"
                            inputName="guestAllergies"
                            updateFieldState={ (value, inputName, typeOf) => this.updatefield(value, inputName, typeOf) }
                            fieldValue={ this.state.guest.guestAllergies }
                            />
              </div>
            : null }
          </div>
        : null }
      </div>
      <Button bsStyle="primary" onClick={() => this.submitGuest()}>Submit</Button>
    </div>
  }
}

export default Registration