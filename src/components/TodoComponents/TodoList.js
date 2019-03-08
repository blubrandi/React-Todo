import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log(props.todos)
    return (
      <div className="taskList">
        {props.todos.map(todo => 
            <Todo id={todo.id} task={todo.task} toggleTask={props.toggleTask}/>
        )}
      </div>
    )

}

export default TodoList;
