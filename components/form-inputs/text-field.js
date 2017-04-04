import React from 'react'

const TextField = ({ inputLabel, fieldValue, inputName, inputType, updateFieldState }) => {
  let field

  if (inputType === 'text') {
    field = (
      <input  type={ inputType }
              value={ fieldValue }
              placeholder="This a placeholder"
              onChange={ (evt) => updateFieldState(evt.target.value, inputName) }
              />
    )
  } else if (inputType === 'textarea') {
    field = (
      <textarea   value={ fieldValue }
                  placeholder="This a placeholder"
                  onChange={ (evt) => updateFieldState(evt.target.value, inputName) }
                  />
    )
  } else {
    field = (
      <input  type={ inputType }
              value={ fieldValue }
              placeholder="This a placeholder"
              onChange={ (evt) => updateFieldState(evt.target.value, inputName) }
              />
    )
  }

  return (
    <div>
      <label>{inputLabel}</label>
      { field }
    </div>
  )
}

export default TextField
