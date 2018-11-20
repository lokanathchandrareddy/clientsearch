import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import ClientListConnector from './connectors/ClientListConnector';
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/client" component={ClientListConnector} />
          <Route path="/client/:id" component={ClientListConnector}/>
        </Switch>
      </div>
    );
  }
}

export default App;