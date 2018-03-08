import React, { Component } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from "./components/TodoList"

class App extends Component {
  state = { todos: [] }

  componentDidMount(){
    //TODO

  }

  addItem = (name) => {
    //todo

  }

  updateTodo = (id) => {


  }

  deleteTodo = (id) =>{
    //todo

  }
  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos} updateTodos={this.updateTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
