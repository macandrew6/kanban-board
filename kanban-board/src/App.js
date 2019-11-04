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
      allListItems: [], 
    };

    this.addTodo = this.addTodo.bind(this);
    this.moveTodoLeft = this.moveTodoLeft.bind(this);
    this.moveTodoRight = this.moveTodoRight.bind(this);
  }

  componentDidMount() {
    let savedallListItems = localStorage.getItem('allListItems');

    if (savedallListItems) { 
      let parsedAllListItems = JSON.parse(savedallListItems);
      this.setState({
        allListItems: parsedAllListItems
      });
    } else {
      console.log('no todos');
    }
  }
  
  addTodo(todo) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    allListItems.push(todo);

    this.setState({
      allListItems: allListItems 
    }, () => {
      localStorage.setItem('allListItems', JSON.stringify(allListItems));
    });
    console.log(localStorage.getItem('allListItems'));
  }

  moveTodoRight(e, id) {
    const allListItems = JSON.parse(JSON.stringify(this.state.allListItems));
    const target = allListItems.find(item => item.id === id);
    for (let i = 0; i < this.state.categories.length; i++) {
      let category = this.state.categories[i];
      if (target.category === category) {
        target.category = this.state.categories[i + 1];
        break;
      }
    }
    
    this.setState({
      allListItems
    });
  }

  moveTodoLeft(e, id) {
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
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard 
            moveTodoRight={this.moveTodoRight} 
            moveTodoLeft={this.moveTodoLeft}
            todoList={this.filterTodoListItems()}/>
          <InprogressBoard 
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            inProgressList={this.filterInProgressListItems()}/>
          <CompletedBoard 
            moveTodoRight={this.moveTodoRight}
            moveTodoLeft={this.moveTodoLeft}
            completedList={this.filterCompletedListItems()}/>
        </div>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
