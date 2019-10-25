import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';
import InprogressBoard from './components/InprogressBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <TodoBoard />
        <InprogressBoard />
      </div>
    );
  }
}

export default App;
