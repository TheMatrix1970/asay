import React, { Component } from 'react';
import Root from './RootPage/Root.js'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Root}/>
          <Route exact path="/proposal/:id" component={Proposal}/>
        </div>
      </Router>
    );
  }
}

class Proposal extends Component {
  render() {
    return (
      <div>Her kommer et proposal en dag</div>
    );
  }
}

export default App;
