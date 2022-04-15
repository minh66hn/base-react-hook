import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [name, setName] = useState("");
  const handleClickbtn = (event, name) => {}
  const [listToDo, setListToDo] = useState([
      { id: 1, name: "harry" },
      { id: 2, name: "dev" },
      { id: 3, name: "manh" },
      { id: 4, name: "noname" },
    ]);
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          console.log("check event:", event);
          setName(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={(event) => {
          handleClickbtn(event, name);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello Todo list with name = {name}
      <div>List todo:</div>
      {listToDo.map((item) => {
        console.log(item)
        return(
          <div key = {item.id}>item.name</div>
        )
      })}
    </div>
  );
};

export default TodoList;
