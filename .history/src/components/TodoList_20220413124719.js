import React from 'react';

const TodoList = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <label htmlFor="">Name</label>
      <input type="text" value = {name} />
      onChange = {}
    </div>
  );
};

export default TodoList;<label htmlFor="">Name</label>
<input type="text" value = {name} />