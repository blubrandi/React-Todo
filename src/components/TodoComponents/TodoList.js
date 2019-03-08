import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
      <div className="taskList">
        {props.todos.map(todo => 
            <Todo 
            todo={todo}
            toggleItem={props.toggleItem}/>
        )}
      </div>
    )

}

export default TodoList;
