import React, { useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";
import { Tasks } from "../Tasks";
import { Task } from "../Task";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [first, setFisrtVlaue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setFisrtVlaue(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      id: uuidv4(),
      text: first,
      done: false,
      count:1
    };
    let new_Arr = [...todos, payload];
    setTodos(new_Arr);
    setFisrtVlaue("");
    console.log(new_Arr);
  
  };
  const deleteTodo =(value)=>{
    // console.log(todos,id);
    setTodos(todos.filter((todo)=>
        todo.text!== value
    ))
    // console.log(a);
    // setTodos(a)

}

  console.log("todos",todos)
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        placeholder="Add Task"  
        value={first}
        onChange={handleChange}
      />
      <button
        data-cy="add-task-button"
        onClick={() => {
          handleAdd();
        }}
      >Add</button>
      <ul>
        {todos.map((e)=>{
          return <Tasks key={e.id} todos={e.text} deleteTodo={deleteTodo} />
            {/* <Task  key={e.id} deleteTodo={deleteTodo}/> */}
      })}
      </ul>
      
    </div>
  );
};

export default AddTask;
