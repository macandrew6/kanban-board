import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemText: ''
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

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.editingTodo.id;
    const updatedText = this.state.itemText;
    this.props.editTodo(id, updatedText);
  }
  
  render() {
    const { editingTodo } = this.props;
    console.log(editingTodo);
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="modal">
          <button onClick={(e) => this.onClose(e)}>close</button>
          <form>
            <input 
              type="text" 
              onChange={e => this.handleChange(e)}
              value={editingTodo.text}/>
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    );
  }
}