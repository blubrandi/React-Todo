

import React from 'react'

function TodoForm(props) {
    return(
        <form onSubmit={props.addNewTask}>
        <input
            value={props.value}
            type='text'
            name='todo'
            placeholder='Add New Item'
            onChange={props.handleChanges}
        />
        <div className="button-box">
        <button onClick = {props.addNewTask} type="submit">+ Add New Task</button>
        <button onClick = {props.clearCompleted} >- Clear Completed</button>
        </div>
        </form>
    )
}

export default TodoForm