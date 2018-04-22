import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NoteBoard from './components/NoteBoard';
import './style.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NoteBoard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
