import React from "react";
import { useState } from "react";
const TodoList = () => {
  const [name, setName] = useState("");
  const handleclickbtn()=
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
        onClick={() => {
          console.log("click");
        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello Todo list with name = {name}
    </div>
  );
};

export default TodoList;
