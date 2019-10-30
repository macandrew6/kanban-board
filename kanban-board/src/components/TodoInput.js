import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();

    this.state = {
      todo: {
        text: '',
        id: 0,
        category: 'todo'
      }
    };
  }

  handleInputChange(e) {
    const todo = Object.assign({}, this.state.todo);
    todo.text = e.target.value;
    console.log(todo);
    this.setState({
      todo
    });
  }
  
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Type todo here..."
            onChange={e => this.handleInputChange(e)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
