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

  componentDidMount() {
    let savedTodoList = localStorage.getItem('todoList');
    let savedInProgressList = localStorage.getItem('inProgressList');
    let savedCompletedList = localStorage.getItem('completedList');

    
  }
  
  addTodo(todo) {
    const todos = JSON.parse(JSON.stringify(this.state.todoList));
    todos.push(todo);

    this.setState({
      todoList: todos
    });
  }

  moveTodoRight() {

  }

  moveTodoLeft() {

  }

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
