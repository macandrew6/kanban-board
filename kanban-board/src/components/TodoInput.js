import React, { Component } from 'react';

export default class TodoInput extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      id: 0,
      category: 'todo'
    };
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
      id: this.state.id + 1
    });
  }

  handleSubmitInput(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: ''
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmitInput(e)}>
          <input
            type="text"
            placeholder="Type todo here..."
            value={this.state.text}
            onChange={e => this.handleInputChange(e)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
