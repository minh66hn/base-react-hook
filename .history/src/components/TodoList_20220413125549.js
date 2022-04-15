import React from 'react';
import { useState } from 'react';
const TodoList = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label>Name</label>
      <input type="text" value = {name} />

      <br /><br />
      Hello Todo list with name = {name}
    </div>
  );
};

export default TodoList;