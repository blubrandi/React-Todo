import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todosArray = [];

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

  clearCompleted = event => {
    event.preventDefault()
    let todos = this.state.todos.filter(todo => !todo.completed )
    this.setState({ todos })
    }


  addNewTask = (event) => {
    event.preventDefault();
    const newTask = { task: this.state.todo, completed: false, id: Date.now()}
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: '',
    })
  }

  toggleItem = todoId => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === todoId) {
            return {
              ...todo, completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    });
  };



  render() {
          
    return (
      <div className="app">
        <h1>Todo List</h1>
        <TodoList
          todos = {this.state.todos}
          toggleItem={this.toggleItem}
          />

        <TodoForm 
          value={this.state.todo}
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}
          clearCompleted={this.clearCompleted}
          />
          
      </div>
    );
  }
}

export default App;