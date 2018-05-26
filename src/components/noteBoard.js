import React, { Component } from 'react';
import Immutable from 'immutable';
import io from 'socket.io-client';

import InputBar from './input';
import Note from './note';

// import * as db from '../services/datastore';
import '../style.scss';

const socketserver = 'http://localhost:9090';

class NoteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
    };

    this.socket = io(socketserver);
    this.socket.on('connect', () => { console.log('socket.io connected'); });
    this.socket.on('disconnect', () => { console.log('socket.io disconnected'); });
    this.socket.on('reconnect', () => { console.log('socket.io reconnected'); });
    this.socket.on('error', (error) => { console.log(error); });

    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
  }

  componentDidMount() {
    this.socket.on('notes', (notes) => {
      this.setState({ notes: Immutable.Map(notes) });
    }, this.props.boardId);
  }

  addPost(note) {
    this.socket.emit('createNote', note);
  }

  deletePost(id) {
    this.socket.emit('deleteNote', id);
  }

  updatePost(id, newNote) {
    const fields = Object.assign({}, this.state.notes.id, newNote);
    this.socket.emit('updateNote', id, fields);
  }

  displayPosts() {
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
