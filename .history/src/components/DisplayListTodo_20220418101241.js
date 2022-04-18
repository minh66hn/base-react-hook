import React from 'react';

const DisplayListTodo = (props) => {
    return (
        <div>
           <div>List todo:</div>
      {
          const listData = props.childData;
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