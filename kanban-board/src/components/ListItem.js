import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { 
      todo, 
      moveTodoLeft, 
      moveTodoRight, 
      deleteTodo,
      toggleModal } = this.props;

    return (
      <div className="list-item">
        <div>
          <p className="todo-text">{todo.text}</p>
        </div>
        <div className="list-item-button-container">
          <button onClick={(e) => moveTodoLeft(e, todo.id)} value="left">Left</button>
          <button onClick={(e) => moveTodoRight(e, todo.id)} value="right">Right</button>
          <button onClick={deleteTodo(todo.id)}>Delete</button>
          <button onClick={(e) => toggleModal(e, todo.id)}>Edit</button>
        </div>
      </div>
    );
  }
}
