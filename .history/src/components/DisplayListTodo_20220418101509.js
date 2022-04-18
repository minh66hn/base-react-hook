import React from 'react';

const DisplayListTodo = (props) => {
    const listData = props.childData
    const handleDeleteBtn = (id) => {
        // alert(`you deleted item by id:${id}`);
        // let updateListTodo = listTodo.filter((item) => item.id !== id);
        // setListTodo(updateListTodo);
      };
    return (
        <div>
           <div>List todo:</div>
      {
          listData.map((item) => {
        console.log(item);
        return (
          <div
            key={item.id}
            onClick={() => {
              handleDeleteBtn(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div> 
        
    );
};

export default DisplayListTodo;