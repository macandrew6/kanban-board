import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoBoard extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div className="todoboard-container board">
        <h3>TodoBoard</h3>
        <div>
          {todoList.map((todo, i) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    );
  }
}
