import React from 'react';

import './Todo.css'

const Todo = props => {

    return(
         <div className={ `todo ${props.todo.completed ? 'completed' : ''}` }
         onClick={ () => {
            props.toggleItem(props.todo.id)
            
          }}>
          {props.todo.task}
            
        </div>
    );
};

export default Todo