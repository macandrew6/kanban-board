import React, { Component } from 'react';

export default class TodoBoard extends Component {
  render() {
    const { todoList } = this.props;

    return (
      <div className="todoboard-container board">
        <h3>TodoBoard</h3>
        <div>
          {todoList.map((todo, i) => (
            <div>{todo}</div>
          ))}
        </div>
      </div>
    );
  }
}
