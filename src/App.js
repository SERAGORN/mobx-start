import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'mobx-react'
import Store from './stores/index'
import Page from './Page'
const store = new Store("route")
const routes = store.returnRoutes()

class App extends Component {
  render() {
    return (
      <Provider {...routes}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Page/>
      </div>
      </Provider>
    );
  }
}

export default App;
