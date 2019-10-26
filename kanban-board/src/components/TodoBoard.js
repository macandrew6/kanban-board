import React, { Component } from 'react';

export default class TodoBoard extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  
  render() {
    return (
      <div className="todoboard-container board">
        <h3>hello from TodoBoard</h3>
        <div>
        
        </div>
      </div>
    );
  }
}
