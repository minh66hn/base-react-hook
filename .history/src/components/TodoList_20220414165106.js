import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const handleClickbtn = (event, name) => {};
  const [listTodo, setListTodo] = useState([
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
        value={todo}
        onChange={(event) => {
          console.log("check event:", event);

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
      <div>List todo:</div>
      {listTodo.map((item) => {
        console.log(item);
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default TodoList;
