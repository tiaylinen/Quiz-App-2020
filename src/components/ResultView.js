import React from 'react';

//one result, presented as a title and further description
const ResultView = ({type, title, description}) => {

    return (
      <div className="result" id={type}> 
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }

export default ResultView