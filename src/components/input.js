import React, { Component } from 'react';


class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: '',
      xPosition: Math.floor(Math.random() * (300)) + 350,
      yPosition: Math.floor(Math.random() * (100)) + 50,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  onInputChange(event) {
    this.setState({ title: event.target.value });
  }

  createPost() {
    this.props.addPost(Object.assign({}, this.state));
    this.setState({
      xPosition: Math.floor(Math.random() * (300)) + 300,
      yPosition: Math.floor(Math.random() * (200)) + 100,
      title: '',
    });
  }

  render() {
    return (
      <div id="inputContainer">
        <input id="inputBar" onChange={this.onInputChange} value={this.state.title} />
        <button id="inputBarButton" onClick={this.createPost}> add Post </button>
      </div>
    );
  }
}

export default InputBar;
