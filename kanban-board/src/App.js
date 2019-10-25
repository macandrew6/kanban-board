import React, { Component } from 'react';
import TodoBoard from './components/TodoBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Kanban board</h2>
        <TodoBoard />
      </div>
    );
  }
}

export default App;
