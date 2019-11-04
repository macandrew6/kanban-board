import React, { Component } from 'react'

export default class TodoItem extends Component {
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
          <button onClick={(e) => moveTodoLeft(e)} value="left">Left</button>
          <button onClick={(e) => moveTodoRight(e)} value="right">Right</button>
        </div>
      </div>
    );
  }
}
