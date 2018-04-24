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
        <li><NavLink to="/Board2">NoteBoard 2</NavLink></li>
        <li><NavLink to="/Board3" >NoteBoard 3</NavLink></li>
        <li><NavLink to="/Board4">NoteBoard 4</NavLink></li>
        <li><NavLink to="/Board5" >NoteBoard 5</NavLink></li>
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

const Board2 = (props) => {
  return (
    <div id="page">
      <Nav />
      <NoteBoard boardId="2" theme="theme2" />
    </div>
  );
};
const Board3 = (props) => {
  return (
    <div id="page">
      <Nav />
      <NoteBoard boardId="3" theme="theme3" />
    </div>
  );
};
const Board4 = (props) => {
  return (
    <div id="page">
      <Nav />
      <NoteBoard boardId="4" theme="theme4" />
    </div>
  );
};
const Board5 = (props) => {
  return (
    <div id="page">
      <Nav />
      <NoteBoard boardId="5" theme="theme5" />
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
            <Route path="/Board2" component={Board2} />
            <Route path="/Board3" component={Board3} />
            <Route path="/Board4" component={Board4} />
            <Route path="/Board5" component={Board5} />

            <Route component={FallBack} />
          </Switch>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
