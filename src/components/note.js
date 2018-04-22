import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
    this.renderNote = this.renderNote.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({ title: props.note.title });
    this.setState({ desc: props.note.desc });
    this.setState({ xPosition: props.note.xPosition });
    this.setState({ yPosition: props.note.yPosition });
  }

  onInputChange(event) {
    this.setState({ desc: event.target.value });
  }


  renderNote() {
    if (this.state.isEditing) {
      console.log('hi');

      console.log(this.state.desc);
      console.log('hi');

      return (
        <div id="note">
          <div>{this.props.note.title} </div>
          <i onClick={() => {
            this.props.updatePost(this.props.id, this.state);
            this.setState({ isEditing: false });
          }}
            className="fa fa-check"
            aria-hidden="true"
          />
          <i onClick={() => this.props.deletePost(parseInt(this.props.id))} className="fa fa-trash-o" aria-hidden="true" />


          <Textarea id="editTextArea" value={this.state.desc} onChange={this.onInputChange} />

        </div>
      );
    } else {
      return (
        <div id="note">
          <div>{this.props.note.title} </div>
          <i onClick={() => this.setState({ isEditing: true })} className="fa fa-pencil" aria-hidden="true" />
          <i onClick={() => this.props.deletePost(parseInt(this.props.id))} className="fa fa-trash-o" aria-hidden="true" />

          <div>{this.props.note.desc} </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div >
        <Draggable
          handle=".note-mover"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={null}
          onStart={this.onStartDrag}
          onDrag={this.onDrag}
          onStop={this.onStopDrag}
        >
          <div>
            {this.renderNote()}

          </div>
        </Draggable>
      </div>
    );
  }
}

export default Note;
