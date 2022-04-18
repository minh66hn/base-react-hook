import React from 'react';

const DisplayListTodo = () => {
    return (
        <div>
           <div>List todo:</div>
      {listTodo.map((item) => {
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
        </div>
    );
};

export default DisplayListTodo;