import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: this.props.editingTodo.text
    };
  }

  onClose(e) {
    if (this.props.toggleModal) {
      this.props.toggleModal(e);
    }
  }

  handleChange(e) {
    this.setState({
      itemText: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const id = this.props.editingTodo.id;
    const updatedText = this.state.itemText;
    await this.props.editTodo(id, updatedText)
    this.onClose();
  }
  
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal">
          <button onClick={(e) => this.onClose(e)}>close</button>
          <p>{this.state.itemText}</p>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input 
              type="text" 
              onChange={e => this.handleChange(e)}
              value={this.state.itemText}/>
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    );
  }
}