import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';
import CompletedBoard from './components/CompletedBoard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }
  render() {
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <div className="kanbanboard-container">
          <TodoBoard />
          <InprogressBoard />
          <CompletedBoard />
        </div>
      </div>
    );
  }
}

export default App;
