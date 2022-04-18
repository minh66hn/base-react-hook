import React from "react";

const AddTodo = (props) => {
  return (
    <div>
        {    <label>Name</label>
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
          handleClickbtn(todo);
        }}
      >
        Submit
      </button>
      <br />
      <br />
            const {handleClickbtn,todo,setTodo} = props
             handleClickbtn=(todo)=>{
                props.handleClickbtn(todo)
            }
        }
    </div>
  );
};

export default AddTodo;
