import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';
import CompletedBoard from './components/CompletedBoard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: ['take a walk', 'make a shake', 'shake a make'],
      inProgressList: [],
      completedList: []
    };
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
      </div>
    );
  }
}

export default App;
