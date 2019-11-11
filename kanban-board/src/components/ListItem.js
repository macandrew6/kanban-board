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
      <div>
        {todo.text}
        <div>
          <button onClick={(e) => moveTodoLeft(e, todo.id)} value="left">Left</button>
          <button onClick={(e) => moveTodoRight(e, todo.id)} value="right">Right</button>
          <button onClick={(e) => deleteTodo(e, todo.id)}>Delete</button>
          <button onClick={(e) => toggleModal(e, todo.id)}>Edit</button>
        </div>
      </div>
    );
  }
}
