import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';
import CompletedBoard from './components/CompletedBoard';
import TodoInput from './components/TodoInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: ['todo', 'inProgress', 'completed'],
      todoList: [],
      inProgressList: [],
      completedList: []
    };

    this.addTodo = this.addTodo.bind(this);
  }
  
  addTodo(todo) {
    const todos = JSON.parse(JSON.stringify(this.state.todoList));
    todos.push(todo);

    this.setState({
      todoList: todos
    });
  }
  // functions;
    // pull one item from todo list and move into inProgress list
    // on mouse down

  render() {
    const { todoList, inProgressList, completedList } = this.state;
    
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard todoList={todoList}/>
          <InprogressBoard inProgressList={inProgressList}/>
          <CompletedBoard completedList={completedList}/>
        </div>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
