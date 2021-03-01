import React from 'react'
import './Option.css'

//one option presented as a radio button, grouped by the question each option belongs to 
const Option = ({option, value, group}) => {

  return(
    <div>
      <input id={option} className='radiobutton' name={group} type='radio' value={value}/>
      <label htmlFor={option}> {option} </label>
    </div>
  )
}


export default Option