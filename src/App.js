import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
// import Todo from './components/TodoComponents/Todo'

const todosArray = []

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosArray,
      todo: '',
    }
    
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addNewTask = event => {
    event.preventDefault();
    const newTask = { task: this.state.todo, completed: false, id: Date.now()}
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: '',
    })
  }


  render() {
    return (
      <div>
        <h1>Testing Output</h1>
        <TodoList todos = {this.state.todos} />
        <TodoForm 
          value={this.state.todo}
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}/>
      </div>
    );
  }
}

export default App;