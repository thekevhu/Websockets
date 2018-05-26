import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Draggable from 'react-draggable';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      title: this.props.note.title,
    };
    this.renderNote = this.renderNote.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onStopDrag = this.onStopDrag.bind(this);
  }

  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({ title: props.note.title });
    this.setState({ desc: props.note.desc });
    this.setState({ xPosition: props.note.xPosition });
    this.setState({ yPosition: props.note.yPosition });
  }


  onDescChange(event) {
    this.setState({ desc: event.target.value });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onDrag(e, ui) {
    this.setState({
      xPosition: ui.x,
      yPosition: ui.y,
    });
  }

  onStopDrag() {
    this.props.updatePost(this.props.id, this.state);
  }

  renderNote() {
    if (this.state.isEditing) {
      return (
        <div id="note">
          <div id="noteHeader">
            <div>
              <Textarea id="editTitle"
                value={this.state.title}
                onChange={this.onTitleChange}
              />
              <i onClick={() => {
                this.props.updatePost(this.props.id, this.state);
                this.setState({
                  isEditing: false,
                });
              }}
                className="fa fa-check"
                aria-hidden="true"
              />
              <i onClick={() => this.props.deletePost(this.props.id)} className="fa fa-trash-o" aria-hidden="true" />
            </div>
            <i className=" note-mover fa fa-arrows-alt" aria-hidden="true" />
          </div>

          <Textarea id="editDesc"
            value={this.state.desc}
            onChange={this.onDescChange}
          />

        </div>
      );
    } else {
      return (
        <div id="note">

          <div id="noteHeader">
            <div>
              {this.props.note.title}
              <i onClick={() => this.setState({ isEditing: true })} className="fa fa-pencil" aria-hidden="true" />
              <i onClick={() => this.props.deletePost(this.props.id)} className="fa fa-trash-o" aria-hidden="true" />
            </div>
            <i className=" note-mover fa fa-arrows-alt" aria-hidden="true" />
          </div>
          <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.desc || '') }} />
        </div>
      );
    }
  }

  render() {
    return (
      <div >
        <Draggable
          handle=".note-mover"
          defaultPosition={{ x: this.props.note.xPosition, y: this.props.note.yPosition }}
          position={{ x: this.props.note.xPosition, y: this.props.note.yPosition }}
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
