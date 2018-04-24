import React, { Component } from 'react';
import Immutable from 'immutable';
import InputBar from './input';
import Note from './note';
import * as db from '../services/datastore';
import '../style.scss';


class NoteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
  }

  componentDidMount() {
    console.log(this.props.boardId);

    db.fetchNotes((notes) => {
      console.log(notes);
      this.setState({ notes: Immutable.Map(notes) });
    }, this.props.boardId);
  }

  addPost(newPost) {
    db.createNote(newPost, this.props.boardId);
  }

  deletePost(id) {
    db.deleteNote(id, this.props.boardId);
  }

  updatePost(id, fields) {
    const newNote = Object.assign({}, this.state.notes.id, fields);
    db.updateNote(id, newNote, this.props.boardId);
  }

  displayPosts() {
    // console.log(this.state.notes);

    return this.state.notes.entrySeq().map(([id, note]) => {
      return (<Note
        key={id}
        id={id}
        note={note}
        updatePost={this.updatePost}
        deletePost={this.deletePost}
      />);
    });
  }

  render() {
    return (
      <div>
        <InputBar addPost={this.addPost} />
        {this.displayPosts()}
      </div>
    );
  }
}

export default NoteBoard;
