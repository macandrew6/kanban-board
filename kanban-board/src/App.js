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
      todoList: [], // one list
      inProgressList: [], // remove
      completedList: [] // remove
    };

    this.addTodo = this.addTodo.bind(this);
    this.moveTodoLeft = this.moveTodoLeft.bind(this);
    this.moveTodoRight = this.moveTodoRight.bind(this);
  }

  componentDidMount() {
    let savedTodoList = localStorage.getItem('todoList'); // combine all lists
    let savedInProgressList = localStorage.getItem('inProgressList'); // remove
    let savedCompletedList = localStorage.getItem('completedList'); // remove

    if (savedTodoList && savedInProgressList && savedCompletedList) { // only check one list
      let parsedTodoList = JSON.parse(savedTodoList); // if list is true parse
      let parsedInProgressList = JSON.parse(savedInProgressList); // remove
      let parsedCompletedList = JSON.parse(savedCompletedList); // remove
      this.setState({
        todoList: parsedTodoList, // one list
        inProgressList: parsedInProgressList, // remove
        completedList: parsedCompletedList // remove
      });
    } else {
      console.log('no todos');
    }
  }
  
  addTodo(todo) {
    const todos = JSON.parse(JSON.stringify(this.state.todoList));
    todos.push(todo);

    this.setState({
      todoList: todos // set main list
    }, () => {
      localStorage.setItem('todoList', JSON.stringify(todos)); // save main list
      localStorage.setItem('inProgressList', JSON.stringify(this.state.inProgressList)); // remove
      localStorage.setItem('completedList', JSON.stringify(this.state.completedList)); // remove
    });
    console.log(localStorage.getItem('todoList'));
    console.log(localStorage.getItem('inProgressList')); // remove
    console.log(localStorage.getItem('completedList')); // remove
  }

  moveTodoRight(e, id) {
    // if the current element is the furtest to the left disable the left button
    // move current selected target to the board on the right
    // unless it is the last board
    console.log(id);
    // const todoList = JSON.parse(JSON.stringify(this.state.todoList));
    // const inProgressList = JSON.parse(JSON.stringify(this.state.inProgressList));
    // const inCompletedList = JSON.parse(JSON.stringify(this.state.inCompletedList));

    console.log('move item ', e.currentTarget);
  }

  moveTodoLeft(e) {
    console.log('move item', e.target);
  }

  filterTodoListItems() {
    const todoList = this.state.todoList;
    const inProgressList = this.state.inProgressList;
    const inCompletedList = this.state.completedList;
    const allLists = todoList.concat(inProgressList).concat(inCompletedList);
    const copyAllLists = JSON.parse(JSON.stringify(allLists));
    return copyAllLists.filter(item => item.category === 'todo');
  }

  filterInProgressListItems() {
    const todoList = this.state.todoList;
    const inProgressList = this.state.inProgressList;
    const inCompletedList = this.state.completedList;
    const allLists = todoList.concat(inProgressList).concat(inCompletedList);
    const copyAllLists = JSON.parse(JSON.stringify(allLists));
    return copyAllLists.filter(item => item.category === 'inProgress');
  }

  filterCompletedListItems() {
    const todoList = this.state.todoList;
    const inProgressList = this.state.inProgressList;
    const inCompletedList = this.state.completedList;
    const allLists = todoList.concat(inProgressList).concat(inCompletedList);
    const copyAllLists = JSON.parse(JSON.stringify(allLists));
    return copyAllLists.filter(item => item.category === 'completed');
  }

  render() {
    // const {} = this.state;
    console.log(this.filterTodoListItems());
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard 
            moveTodoRight={this.moveTodoRight} 
            moveTodoLeft={this.moveTodoLeft}
            todoList={this.filterTodoListItems()}/>
          <InprogressBoard 
            inProgressList={this.filterInProgressListItems()}/>
          <CompletedBoard 
            completedList={this.filterCompletedListItems()}/>
        </div>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
