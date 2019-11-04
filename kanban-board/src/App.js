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

    if (savedTodoList && savedInProgressList && savedCompletedList) {
      let parsedTodoList = JSON.parse(savedTodoList);
      let parsedInProgressList = JSON.parse(savedInProgressList);
      let parsedCompletedList = JSON.parse(savedCompletedList);
      this.setState({
        todoList: parsedTodoList,
        inProgressList: parsedInProgressList,
        completedList: parsedCompletedList
      });
    } else {
      console.log('no todos');
    }
  }
  
  addTodo(todo) {
    const todos = JSON.parse(JSON.stringify(this.state.todoList));
    todos.push(todo);

    this.setState({
      todoList: todos
    }, () => {
      localStorage.setItem('todoList', JSON.stringify(todos));
      localStorage.setItem('inProgressList', JSON.stringify(this.state.inProgressList));
      localStorage.setItem('completedList', JSON.stringify(this.state.completedList));
    });
    console.log(localStorage.getItem('todoList'));
    console.log(localStorage.getItem('inProgressList'));
    console.log(localStorage.getItem('completedList'));
  }

  moveTodoRight() {
    // if the current element is the furtest to the left disable the left button
    // move current selected target to the board on the right
    // unless it is the last board
  }

  moveTodoLeft() {
    
  }

  render() {
    const { todoList, inProgressList, completedList } = this.state;
    
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard 
            moveTodoRight={this.moveTodoRight} 
            moveTodoLeft={this.moveTodoLeft}
            todoList={todoList}/>
          <InprogressBoard inProgressList={inProgressList}/>
          <CompletedBoard completedList={completedList}/>
        </div>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
