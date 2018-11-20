import React, { Component } from 'react';
import './App.css';
import ClientList from './components/ClientList';
import data from './data/clients.json';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ClientList data={data} />
      </div>
    );
  }
}

export default App;