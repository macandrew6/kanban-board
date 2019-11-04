import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  
  render() {
    const { todo, moveTodoLeft, moveTodoRight } = this.props;
    console.log(todo);
    return (
      <div>
        {todo.text}
        <div>
          <button onClick={(e) => moveTodoLeft(e, todo.id)} value="left">Left</button>
          <button onClick={(e) => moveTodoRight(e, todo.id)} value="right">Right</button>
        </div>
      </div>
    );
  }
}
