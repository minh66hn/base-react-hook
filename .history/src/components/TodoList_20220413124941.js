import React from 'react';

const TodoList = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" value = {name} />
      onChange = {(event) =>{
        console.log("check event:",event)
        setName(event.target.value)
      }}
      <br /><br />
      Hello Todo list with name = {name}
    </div>
  );
};

export default TodoList;