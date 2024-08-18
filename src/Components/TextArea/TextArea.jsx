import React, { useState } from 'react'

const TextArea = (props) => {

  const [comment, setComment] = useState("");

  const commentHandler = (e) => {
    setComment(e.target.value);
  }

  const submitHandle = () => {
    if (comment !== "") {
      props.submitHandler(comment);
    }
  }
  return (
    <div className='container my-3 '>
      <h2>Comments</h2>
      <div class="my-2">
        <textarea placeholder="Leave a comment here" value={comment} onChange={commentHandler} rows={8} cols="70"></textarea>
      </div>
      <button className='btn-info p-1' onClick={submitHandle} disabled={comment.length < 10} >Submit</button> <p>Comment should be longer then 10 characters</p>
    </div>
  )
}

export default TextArea
