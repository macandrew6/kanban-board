import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor() {
    super();

    this.state = {
      
    };
  }
  
  render() {
    const { todo } = this.props;

    return (
      <div>
        {todo.text}
        <div>
          <button>Left</button>
          <button>Right</button>
        </div>
      </div>
    );
  }
}
