import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  onClose(e) {
    if (this.props.toggleModal) {
      this.props.toggleModal(e);
    }
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
          </form>
        </div>
      </div>
    );
  }
}