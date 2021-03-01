import React from 'react';

//one comment
const Comment = ({nickname, content}) => {

    return (
      <div className="comment"> 
        <p>{nickname}: {content}</p>
      </div>
    )
  }

export default Comment