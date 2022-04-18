import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import DisplayListTodo from "./DisplayListTodo";
const Home = () => {
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
  const handleDeleteBtn = (id) => {
    alert(`you deleted item by id:${id}`);
    let updateListTodo = listTodo.filter((item) => item.id !== id);
    setListTodo(updateListTodo);
  };
  const handleClickbtn = , todo) => {
    const todoItem = {
      id: randomIntFromInterval(5, 999),
      name: todo,
    };
    console.log(listTodo);
    if (!todo) {
      alert("please enter todo");
      return 0;
    }
    //catch1
    // let curentTodo = listTodo;
    // curentTodo.push(todoItem);
    // setListTodo(curentTodo);
    //catch2
    setListTodo([...listTodo, todoItem]);
    setTodo("");
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
          handleClickbtn( todo);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      <DisplayListTodo childData={listTodo} handleDeleteBtn={handleDeleteBtn} />
      <AddTodo handleClickbtn={handleClickbtn} todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default Home;
