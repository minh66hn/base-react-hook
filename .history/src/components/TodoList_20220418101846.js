import React from "react";
import { useState } from "react";
import DisplayListTodo from "./DisplayListTodo";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const [listTodo, setListTodo] = useState([
    { id: 1, name: "harry" },
    { id: 2, name: "dev" },
    { id: 3, name: "manh" },
    { id: 4, name: "noname" },
  ]);
  const handleClickbtn = (event, todo) => {
    const todoItem = {
      id: randomIntFromInterval(5, 999),
      name: todo,
    };
    console.log(listTodo);
    if(!todo){
      alert("please enter todo");
      return 
    }
    //catch1
    // let curentTodo = listTodo;
    // curentTodo.push(todoItem);
    // setListTodo(curentTodo);
    //catch2
    setListTodo([...listTodo, todoItem]);
  };

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={todo}
        onChange={(event) => {
          console.log("check event:", event);
          setTodo(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(event) => {
          handleClickbtn(event, todo);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <DisplayListTodo childData={listTodo} />
    </div>
  );
};

export default TodoList;
