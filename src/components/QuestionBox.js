import React from 'react'

//one question and its answer options
const QuestionBox = ({questions, options}) => {

  return (
    <div>
      <h2>{questions}</h2>
      <div>
        {options}
      </div>
    </div>
  )
}





export default QuestionBox