import React from 'react'

import { FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';

const TextField = ({ inputLabel, fieldValue, inputName, inputType, updateFieldState, radioValue }) => {
  let field
  if (inputType === 'text') {
    field = (
      <FormControl  type="text"
                    label="Text"
                    value={ fieldValue }
                    placeholder="Type here"
                    onChange={ (evt) => updateFieldState(evt.target.value, inputName, 'string') }
                    />
    )
  } else if (inputType === 'textarea') {
    field = (
      <FormControl  componentClass="textarea" 
                    placeholder="textarea"    value={ fieldValue }
                    placeholder="Type here"
                    onChange={ (evt) => updateFieldState(evt.target.value, inputName, 'string') }
                    />
    )
  } else if (inputType === 'radio') {
    field = (
      <FormGroup className="noMargin">
        <radiogroup>
          {radioValue.map((value, index) => {
            return <Radio inline 
                          name={inputName} 
                          key={index} 
                          value={value._id}
                          onChange={ (evt) => updateFieldState(evt.target.value, inputName, 'string') }
                          checked={value._id == fieldValue}
                          >
                          {value.foodOption}
                          </Radio>
          })}
        </radiogroup>
      </FormGroup>
    )
  } else if (inputType === 'bool') {
    field = (
      <FormGroup className="noMargin">
        <radiogroup>
          {radioValue.map((value, index) => {
            let textValue
            if (value) {
              textValue = 'Yes'
            } else {
              textValue = 'No'
            }
            return <Radio inline 
                          name={inputName} 
                          key={index} 
                          value={value}
                          onChange={ (evt) => updateFieldState(evt.target.value, inputName, 'bool') }
                          checked={value == fieldValue}
                          >
                          {textValue}
                          </Radio>
          })}
        </radiogroup>
      </FormGroup>
    )
  } else {
    field = 'no corresponding field'
  }

  return (
    <FormGroup className="paddingBottom noMargin" controlId={inputName}>
      <ControlLabel>{inputLabel}</ControlLabel>
      { field }
    </FormGroup>
  )
}

export default TextField
