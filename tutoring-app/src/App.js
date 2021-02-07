import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title"
import LogIn from "./components/LogIn"

import React, { Component } from 'react';

class App extends Component {
  state = {
    loggedIn: false,
    loggedInUser: {
      email: "",
      password: ""
    }
  }

  UserDetails = (email, password) => {
    console.log(`${email}, ${password} in App.js`)
    //I need to do a call to the db here to retrive other details for the logged in user like name?

  }

  render() {

    if (this.state.loggedIn === false) {
      return (
        <div className="App-background">
          <Title></Title>
          <LogIn logUserDetails={this.UserDetails}></LogIn>

        </div>
      );
    } else {
      return (
        <div className="App-loggedin-background">
          <h1>Logged In!</h1>
        </div>
      )
    }


  }
}

export default App;

