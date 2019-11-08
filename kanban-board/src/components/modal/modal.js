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
    const { editingTodo, editTodo } = this.props;
    console.log(editingTodo);
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        <div>
          <button onClick={(e) => this.onClose(e)}>close</button>
        </div>
        Hello Modal!
      </div>
    );
  }
}