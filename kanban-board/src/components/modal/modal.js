import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: this.props.editingTodo.text
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      itemText: props.editingTodo ? props.editingTodo.text : ''  
    }
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
    // const { editingTodo } = this.props;
    if (!this.props.show) {
      return null;
    }
    console.log(this.props.editingTodo);
    console.log(this.state.itemText);
    return (
      <div className="modal-container">
        <div className="modal">
          <button onClick={(e) => this.onClose(e)}>close</button>
          {this.props.editingTodo.text}
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