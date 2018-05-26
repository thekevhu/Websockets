import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import NoteBoard from './components/NoteBoard';
import './style.scss';


const About = (props) => {
  return (
    <div id="page">
      <Nav />
      <div id="about">A Neat Note Board</div>
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/Board1" >NoteBoard 1</NavLink></li>

      </ul>
    </nav>
  );
};

const Board1 = (props) => {
  return (
    <div id="page">
      <Nav />
      <NoteBoard boardId="1" theme="theme1" />
    </div>
  );
};


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/Board1" component={Board1} />

            <Route component={FallBack} />
          </Switch>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
