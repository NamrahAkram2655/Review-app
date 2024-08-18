import './App.css';
import Rating from './Components/Rating/Rating';
import TextArea from './Components/TextArea/TextArea';
import List from './Components/List/List';
import { useState } from 'react';

function App() {

  const dummydata = ["eat", "sleep", "shopping"];

  const [todo, setTodo] = useState([]);

  const submitHandler = (val) => {
    setTodo([val, ...todo]);
  }

  const deleteHandler = (index) => {
    let filtered = todo.filter((element, key) => {
      return index !== key;
    });
    console.log(filtered);
    setTodo(filtered);
  }
  
  return (
    <div className="my-5">
      <Rating />
      <TextArea submitHandler={submitHandler} />
      <List dummydata={todo} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
