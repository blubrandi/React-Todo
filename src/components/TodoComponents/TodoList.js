import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log(props.todos)
    return (
      <div>
        {props.todos.map(todo => 
            <Todo task={todo.task}/>
        )}
      </div>
    )

}

export default TodoList;
