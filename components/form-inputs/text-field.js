import React from 'react'

const TextField = ({ inputName, fieldValue, updateFieldState }) => (
	<div>
		<label>{inputName}</label>
	  <input 	type="text"
		  			value={ fieldValue }
		  			placeholder="This a placeholder"
		  			onChange={ (evt) => updateFieldState(evt.target.value) }
		  			/>
	</div>
)

export default TextField
