import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const todosArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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



  addNewTask = (event) => {
    event.preventDefault();
    const newTask = { task: this.state.todo, completed: false, id: Date.now()}
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: '',
    })
  }

  toggleItem = todoId => {
    console.log(` toggleItem ${todoId}`)
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
      <div>
        <h1>This is your Todo List:</h1>
        <TodoList
          todos = {this.state.todos}
          toggleItem={this.toggleItem}
          />

        <TodoForm 
          value={this.state.todo}
          addNewTask={this.addNewTask}
          handleChanges={this.handleChanges}/>
      </div>
    );
  }
}

export default App;