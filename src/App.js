import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // this code here fires, when the app.js loads..

    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => { 
    
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo}))) 
    })    
  }, []);
    

  //function

  const addTodo = (event) => {
    // this will fire off when we click the button.
    event.preventDefault();  //means dont refresh the page.

    db.collection('todos').add({
      todo: input,  //this will add every input in database
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTodos([...todos, input]);  //...todos will import whatever we write in input field and add it at the end of the li.
    setInput('');  //clear the input after clicking on the button.
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <form>
        {/* 1. value={input} this line will connect the above const input with this input.
        2. onChange is a function and part of a input and it allows us to capture the input every time we press a key inside the input. that means whatever we type in input onChange will set that Input in the input field with the help of event method. */}
        {/** <input value={input} onChange={event => setInput(event.target.value)} /> */}

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        {/** 1. onClick={addTodo} this line will connect the above const addTodo with this button. */}
        {/** <button type="submit" onClick={addTodo}>Add Todo</button> */}

        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
        
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;