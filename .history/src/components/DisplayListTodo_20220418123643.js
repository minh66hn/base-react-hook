import React from 'react';

const DisplayListTodo = (props) => {
    const listData = props.childData
    const handleDeleteBtn = (id) => {
        props.handleDeleteBtn(id)
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