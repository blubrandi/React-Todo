import React from 'react';


const Todo = props => {

    return(
         <div className="task" 
         onClick={event => {
            props.toggleItem(props.todo.id);
          }}>
          <p>{props.task}</p>
            
        </div>
    );
};

export default Todo