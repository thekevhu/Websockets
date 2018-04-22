import React, { Component } from 'react';
import Immutable from 'immutable';
import InputBar from './input';
import Note from './note';
import '../style.scss';


class NoteBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: Immutable.Map(),
      i: 0,
    };
    this.addPost = this.addPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
  }

  addPost(newPost) {
    console.log(newPost);
    this.setState({
      notes: this.state.notes.set(this.state.i, newPost),
    });
    this.state.i = this.state.i + 1;
  }

  deletePost(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  updatePost(id, fields) {
    this.setState({
      notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    });
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
