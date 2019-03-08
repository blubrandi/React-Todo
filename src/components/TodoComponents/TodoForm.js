
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
        <button onClick = {props.addNewTask} type="submit">Add New Task</button>
        <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm