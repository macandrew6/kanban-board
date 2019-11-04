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
      allListItems: [], // one list
    };

    this.addTodo = this.addTodo.bind(this);
    this.moveTodoLeft = this.moveTodoLeft.bind(this);
    this.moveTodoRight = this.moveTodoRight.bind(this);
  }

  componentDidMount() {
    let savedallListItems = localStorage.getItem('allListItems'); // combine all lists

    if (savedallListItems) { // only check one list
      let parsedAllListItems = JSON.parse(savedallListItems); // if list is true parse
      this.setState({
        allListItems: parsedAllListItems, // one list
      });
    } else {
      console.log('no todos');
    }
  }
  
  addTodo(todo) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    allListItems.push(todo);

    this.setState({
      allListItems: allListItems // set main list
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(allListItems)); // save main list
    });
    console.log(localStorage.getItem('allListItems'));
  }

  moveTodoRight(e, id) {
    // if the current element is the furtest to the left disable the left button
    // move current selected target to the board on the right
    // unless it is the last board
    console.log(id);
    // const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    // const inProgressList = JSON.parse(JSON.stringify(this.state.inProgressList));
    // const inCompletedList = JSON.parse(JSON.stringify(this.state.inCompletedList));

    console.log('move item ', e.currentTarget);
  }

  moveTodoLeft(e) {
    console.log('move item', e.target);
  }

  filterTodoListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
    return copyAllLists.filter(item => item.category === 'todo');
  }

  filterInProgressListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
    return copyAllLists.filter(item => item.category === 'inProgress');
  }

  filterCompletedListItems() {
    const copyAllLists = JSON.parse(JSON.stringify(this.state.allListItems));
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
