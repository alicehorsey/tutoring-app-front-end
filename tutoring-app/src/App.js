import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title"
import Home from "./components/Home"
import React, { Component } from 'react';

class App extends Component {


  render() {


    return (
      <div className="App-background">
        <Home />
      </div>
    )

  }
}

export default App;

