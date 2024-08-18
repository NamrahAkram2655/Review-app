import React, { useState } from 'react'

const Rating = () => {

  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);

  let sum = 0;

  const rateHandler = (e) => {

    setCount(count + 1);
    if (e.target.value === "good") {
      setRate(8);
    }
    else if (e.target.value === "better") {
      setRate(6);
    }
    else if (e.target.value === "amazing") {
      setRate(10);
    }
    else if (e.target.value === "bad") {
      setRate(4);
    }
    if (e.target.value === "Rate it!!") {
      setCount(count);
      setRate(0)
    }
  }

  return (
    <div className='container'>
      <h1>Rate Our Product</h1>
      <div className='options'>
        <select name="" id="" onChange={rateHandler}>
          <option value="Rate it!!" selected>Rate It!!</option>
          <option value="good">Good</option>
          <option value="better">Better</option>
          <option value="amazing">Amazing</option>
          <option value="bad">Bad</option>
        </select>
      </div>

      <div>
        <p className='my-2'><strong>Total reviews on this product : {count}</strong></p>
        <p>Rate : {rate}/10</p>
        <p>Average Rating : {sum / count}</p>
      </div>
    </div>
  )
}

export default Rating
