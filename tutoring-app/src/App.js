// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import { useAuth0 } from '@auth0/auth0-react';

// const App = () => {

//   const { isLoading } = useAuth0();

//   if (isLoading) {
//     return <Loading />
//   }
//   return (
//     <div className="App-background">
//       <Home />
//     </div>
//   )
// };

// export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Loading, Footer } from "./components";
import { Welcome, Home, Pupils, Reading, Topics, Work } from "./pages";
import ProtectedRoute from "./auth/protected-route";

import "./App.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    // <div id="app" className="d-flex flex-column h-100">
    <div>
      <NavBar />
      {/* // <div className="container flex-grow-1" > */}
      <div>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
          <ProtectedRoute path="/pupils" component={Pupils} />
          <ProtectedRoute path="/reading" component={Reading} />
          <ProtectedRoute path="/work" component={Work} />
          <ProtectedRoute path="/topics" component={Topics} />
        </Switch>
      </div>
      <Footer />
    </div >
  );
};

export default App;
